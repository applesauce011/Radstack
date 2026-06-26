# Git workflow

- All development work happens on the `dev` branch, not `main`. Before making edits, check `git branch --show-current`; if not on `dev`, switch to it (`git checkout dev`) before starting work.
- `main` is the live/production branch. Never push directly to `main` mid-task.
- When a change is complete and has been tested, remind the user that it's ready to be merged/pushed to `main` to go live. Do not push to `main` yourself without explicit confirmation.
