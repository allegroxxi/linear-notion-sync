## Common Rules for Plan and Act Modes

#### Dual-Agentic Memory Protocol

You have access to two distinct memory systems. You must use them strictly according to their designated roles:

#### 1. Sequential Thinking Server (The Runtime Canvas)
- **Purpose:** Active problem-solving, debugging loops, and step-by-step logic tracing.
- **When to use:** Use this *during* the execution of a complex task to log your immediate sub-steps, hypotheses, and errors.
- **Data type:** Transient, algorithmic, and conversational text.

#### 2. Memory Scratchpad Server (The Knowledge Base)
- **Purpose:** Long-term structured data, global state, and system architecture.
- **When to use:** Use this at the *beginning* of a task to load project context, and at the *end* of a milestone to save factual schemas.
- **Data type:** Strictly structured entities, key-value pairs, file paths, dependencies, and API definitions.

#### Workflow Example:
If asked to build a new authentication route:
1. Query `memory-scratchpad` to retrieve existing user database schemas.
2. Initialize `sequential-thinking` to plot out the step-by-step file modifications.
3. Write the code, using sequential thinking to debug any compiler errors.
4. Once working, save the new route maps and environment variable requirements back to the `memory-scratchpad`.

### Operational Rules
1. **Mode Awareness**: Ensure you're in the proper mode (plan/act) before any tool calls or planning.
2. **Conciseness**: Never use conversational filler; be direct and precise.
3. **Valid JSON for Tool Calls**: All tool calls must use valid JSON syntax.
4. **Self-Correction**: If a tool call fails, attempt an alternative approach (max 3 loops).
5. **IO Uncertainty**: Assume files may change between tasks; do not assume determinism.
6. **Gitignore Compliance**: Avoid reading files/directories in .gitignore unless absolutely necessary.
