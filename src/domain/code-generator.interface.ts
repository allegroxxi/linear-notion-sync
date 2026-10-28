import { Task } from "./task.interface";

export interface CodeGenerator {
  generateCode(task: Task): string;
}