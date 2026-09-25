---
description: "Structured planning methodology for substantial coding tasks"
---

# Planning Methodology

**When to apply:** Any substantial task — new feature, refactoring, migration, complex bug fix, or when the user explicitly enters plan mode or asks for a plan. This does NOT apply to quick fixes, small edits, or simple questions.

**Working directory:** Create all planning artifacts in `docs/plans/<task-slug>/` (kebab-case, e.g. `docs/plans/asset-import-tool/`). Clean up this directory when the task is fully complete and merged.

---

## Phase 1: RESEARCH (do NOT write code yet)

**Goal:** Understand the current system deeply before proposing changes.

1. **Read the source-of-truth files first** — README, CLAUDE.md, and any schema/config/spec files under `docs/` that define how the project is structured. These win over derived artefacts.
2. **Read and trace the relevant code paths** — follow the flow end-to-end through the relevant modules or pipeline stages.
3. **Identify interfaces and contracts** to preserve: public APIs, file formats, data schemas, and any naming or structural conventions documented in CLAUDE.md.
4. **Read related docs** — `docs/`, README, CLAUDE.md, and any build/task runner config.

**Output:** Write `docs/plans/<task-slug>/research.md` containing:
- How the current code works (with file paths and line references)
- Interfaces / schema / naming contracts that MUST be preserved (explicit protection list)
- Edge cases and risks identified
- Open questions for the user

**Hard rule:** Do NOT write any implementation code during this phase. Present the research to the user and wait for validation before proceeding.

---

## Phase 2: PLANNING (do NOT write code yet)

**Goal:** Design the implementation before touching code.

1. **Write the implementation plan** with concrete steps
2. **Reference existing documentation** — link to relevant docs and external references
3. **Provide concrete implementation references** when possible — open-source code, library docs, existing patterns in the codebase
4. **Create the progress checklist** — a checkable todo list for tracking

**Output:** Write two files:
- `docs/plans/<task-slug>/implement.md` — the implementation plan:
  - Ordered list of changes with file paths
  - For each change: what to modify, why, and how
  - Dependencies between steps
  - Links to relevant docs and code references
  - If a new data field or asset type is involved: follow any equivalent checklist documented in CLAUDE.md for adding one (schema/model change → transform/migration → regenerate derived artefacts → tests)
- `docs/plans/<task-slug>/progress.md` — the checklist:
  ```markdown
  # Progress: <Task Name>

  ## Implementation
  - [ ] Step 1: description
  - [ ] Step 2: description
  ...

  ## Tests
  - [ ] Test 1: description
  ...

  ## Validation
  - [ ] All tests pass
  - [ ] Existing tests still pass
  - [ ] Linter/formatter passes
  - [ ] Smallest relevant end-to-end touch (a manual smoke check or a limited run of the feature)
  ```

**Hard rule:** Do NOT write implementation code during this phase. Present the plan to the user and wait for approval before proceeding.

---

## Phase 3: TESTS (write tests BEFORE implementation)

**Goal:** Define the expected behavior before writing the code (TDD red phase).

1. **Write test files first**, following the project's existing test conventions/framework
2. **Cover the key behaviors** defined in the plan — happy paths, edge cases, error cases
3. **Run the tests** — they should FAIL (red phase, since implementation doesn't exist yet)
4. **Update progress.md** — check off test items as written

**Output:** Test files committed or staged. Tests run and confirmed failing for the right reasons.

**Note:** For steps where automated tests aren't practical (e.g. visual/manual review), define manual verification steps in progress.md instead.

---

## Phase 4: IMPLEMENTATION (now write code)

**Goal:** Implement everything in a single focused pass, guided by the plan.

1. **Follow implement.md step by step** — do not deviate from the plan without discussing with the user
2. **Implement all changes in one pass** — avoid partial implementations
3. **Run tests after implementation** — they should now PASS (green phase)
4. **Run the project's dev loop** — format, lint, and test commands — and fix issues
5. **Update progress.md** — check off implementation items as completed
6. **Flag gaps or errors** — if something doesn't work as planned, stop and discuss with the user rather than improvising

**After implementation:**
- Run the full test suite to ensure no regressions
- Verify protected interfaces are intact (from research.md protection list)
- Run the smallest relevant end-to-end check — don't claim it works without actually exercising it
- Present a summary of what was done to the user

---

## Rules

- **Never skip phases.** Research -> Plan -> Test -> Implement. Always in this order.
- **Never implement during Research or Planning.** These phases produce .md files only.
- **Always wait for user validation** between Research and Planning, and between Planning and Implementation.
- **Protect existing interfaces.** The research.md protection list is sacred — do not break listed contracts without explicit user approval.
- **Clean up when done.** Once the task is merged, the `docs/plans/<task-slug>/` directory can be deleted.
