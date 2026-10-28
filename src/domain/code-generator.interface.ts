export interface CodeGenerator {
  generateCode(task: Task): string;
}