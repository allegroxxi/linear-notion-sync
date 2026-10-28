import { CodeGenerator } from '../domain/code-generator.interface';
import { Task } from "../domain/task.interface";
import { TestGenerator } from './test-generator';
import { PythonCodeGenerator } from './python-code-generator';
import { GenericCodeGenerator } from './generic-code-generator';

export class AgentCore {
  selectSubAgent(task: Task): CodeGenerator {
    if (task.language === 'python') return new PythonCodeGenerator();
    else if (task.description.includes('test')) return new TestGenerator();
    // fallback
    return new GenericCodeGenerator();
  }
}