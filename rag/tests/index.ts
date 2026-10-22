// Basic test for RAG implementation
import { RAGService } from '../src/index';

// Initialize the RAG service
const ragService = new RAGService();
await ragService.init();

// Sample documents to add
const docs = [
  { pageContent: 'Machine learning is a field of study that gives computers the ability to learn from data.' },
  { pageContent: 'Retrieval-Augmented Generation (RAG) combines retrieval and generation to improve accuracy.' }
];

// Add documents to the vector store
await ragService.addDocuments(docs);

// Query the service
const queryResult = await ragService.query('What is Retrieval-Augmented Generation?');
console.log('Query result:', queryResult);