import { CodeGenerator } from '../domain/code-generator.interface';
import { Task } from "../domain/task.interface";

export class PythonCodeGenerator implements CodeGenerator {
  generateCode(task: Task): string {
    return `# ${task.description}
def example():
    pass`;
  }
}