// Embeddings service for RAG implementation
import { OpenAIEmbeddings, type BaseEmbeddings } from 'langchain/embeddings';
import { fetch_web_content } from '@clinerules/commands/fetch-web-content'; // Assuming a helper for fetching
import { Undici } from 'undici';

export class LMStudioEmbeddings implements BaseEmbeddings {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint || 'http://localhost:1234/v1/embeddings';
  }

  async embedDocuments(documents: string[]): Promise<number[][]> {
    // Implementation for fetching embeddings from LM Studio
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: documents }),
    });

    const data = await response.json();
    return (data.embeds as number[][]).map(e => e);
  }

  async embedQuery(query: string): Promise<number[]> {
    return this.embedDocuments([query])[0];
  }
}

// Default instance for LM Studio integration (can be configured via env)
export const lmStudioEmbeddings = new LMStudioEmbeddings(process.env.LM_STUDIO_ENDPOINT || 'http://localhost:1234/v1/embeddings');
