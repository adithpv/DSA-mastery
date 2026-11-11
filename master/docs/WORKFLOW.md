# Learning Workflow

This file is the canonical process for learners and agents working in this course.

## New Problem

1. Read `MISSION.md`, `NOTES.md`, `PROGRESS.md`, and the problem's `prompt.md`.
2. Let the learner attempt the problem before teaching the final algorithm.
3. Review the submitted code for correctness, edge cases, complexity, pattern choice, and clarity.
4. Give the smallest useful hint first. Increase hint strength only when needed or requested.
5. Preserve the submitted code. Put a later re-solve in `attempts/YYYY-MM-DD.js`.
6. After the learner has a working answer, ask them to name the pattern and state the invariant from memory.
7. Update the problem's `explanation.md`, the relevant pattern document, and `PROGRESS.md` only with knowledge established during the session.
8. Add a numbered learning record only when the learner demonstrates non-trivial understanding, discloses prior knowledge, corrects a misconception, or changes the mission.

Completion means the solution has been checked, the learner can explain why it works, and the review state accurately reflects their confidence.

## Review Problem

1. Select a due problem from `PROGRESS.md`.
2. Keep `solution.js` and `explanation.md` closed initially.
3. From the prompt, recall the pattern, pointer/state meanings, invariant, and complexity.
4. Trace one example or write a dated attempt.
5. Compare with the saved explanation and record the specific gap.
6. Schedule the next review. A useful default is 1, 3, 7, 14, then 30 days, shortened when recall is weak.

Completion means recall was tested before rereading and the next review is recorded.

## Add a Course Problem

1. Find the highest numbered directory in `../course/arrays/` and increment it.
2. Create `prompt.md`, `solution.js`, `explanation.md`, and `attempts/` using `../templates/`.
3. Create the matching numbered visual lesson in `../lessons/` using the shared files in `../assets/`.
4. Link the visual lesson from the problem's prompt, explanation, and `../course/arrays/README.md`.
5. Add the problem to `../course/arrays/README.md` and `PROGRESS.md` in the same numeric position.
6. Link to an existing pattern document, or create one when the reusable idea is genuinely new.

Completion means the numeric order, indexes, progress table, visual lesson, and pattern links agree.

## Documentation Boundaries

- `prompt.md`: problem statement, constraints, examples; no solution.
- `solution.js`: the learner's current accepted implementation, beginning with one `// Pattern:` comment and containing executable solution code only.
- `attempts/`: dated re-solves and meaningful earlier attempts.
- `explanation.md`: reasoning specific to this problem.
- `../lessons/`: visual understanding with a trace, invariant, pitfalls, complexity, and retrieval questions.
- `../patterns/`: reusable recognition clues, invariants, templates, and failure modes.
- `../learning-records/`: demonstrated learning, not activity logs.
