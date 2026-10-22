// Shared RAG implementation for workspace projects
import { Document } from 'langchain/document';
import { OpenAIEmbeddings, Chroma } from 'langchain/embeddings';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export class RAGService {
  private vectorStore: Chroma;

  constructor() {
    // Initialize the RAG service with a vector store
    this.vectorStore = new Chroma({
      path: './vector_store',
    });
  }

  async init() {
    // Initialize the vector store and load documents if needed
    await this.vectorStore.initialize();
  }

  async addDocuments(documents: Document[]) {
    // Split documents into chunks and embed them
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    });

    const embeddings = new OpenAIEmbeddings(); // Will need to replace with LM Studio integration later
    const chunks = await splitter.splitDocuments(documents);

    // Add to vector store (using LangChain's functionality)
    await this.vectorStore.addDocuments(chunks, embeddings);
  }

  async query(query: string): Promise<string> {
    // Retrieve relevant context for the query
    const results = await this.vectorStore.similaritySearch(query, 3);

    // Return the retrieved context as a string for LLM consumption
    return results.map((doc) => doc.pageContent).join('\n');
  }
}

// Export a singleton instance for convenience in other projects
export const ragService = new RAGService();
