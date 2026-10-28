import { CodeGenerator } from '../domain/code-generator.interface';
import { Task } from "../domain/task.interface";

export class TestGenerator implements CodeGenerator {
  generateCode(task: Task): string {
    return `import { expect } from 'vitest';
describe('${task.description}', () => {
  it('should work', () => { expect(true).toBe(true); });
});`;
  }
}