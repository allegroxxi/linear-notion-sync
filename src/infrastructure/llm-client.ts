import { Task } from '../domain/task.interface';

export class LLMClient {
  async callLLM(task: Task): Promise<string> {
    // Placeholder for LLM integration
    return `Generated code for ${task.description}`;
  }
}