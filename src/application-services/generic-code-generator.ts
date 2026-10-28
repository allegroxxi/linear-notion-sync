import { CodeGenerator } from '../domain/code-generator.interface';
import { Task } from "../domain/task.interface";

export class GenericCodeGenerator implements CodeGenerator {
  generateCode(task: Task): string {
    return `// Generated code for ${task.description}`;
  }
}