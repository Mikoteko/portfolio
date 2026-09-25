Terminal Portfolio

A terminal-style, mobile-friendly CV/portfolio site.

Live at → https://mikoteko.github.io/portfolio/

Instead of a scrollable page, the site is a small in-browser terminal: type a
command (or tap one of the quick-command chips on small screens) to reveal a
section of the CV.

## Commands

| Command                | Description                   |
| ----------------------- | ------------------------------ |
| `help`                  | list available commands        |
| `about`                 | who is Emilie Pacheco (+ formation, langues, centres d'intérêt) |
| `experience`            | professional experience        |
| `projects`              | selected projects              |
| `skills`                | technologies & tools           |
| `contact`               | email, GitHub, LinkedIn        |
| `history`               | show command history           |
| `themes [name]`         | list or switch color themes (`green`, `amber`, `light`) |
| `clear`                 | clear the terminal             |

Arrow keys (↑/↓) recall command history, `Tab` autocompletes, and `Ctrl+L`
clears the screen — same as a real shell.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- No backend — all CV content lives in `src/constants/index.js`

## Project structure

```
src/
  constants/index.js   # all CV content (profile, education, languages, interests, experience, projects, skills, contact)
  terminal/
    Terminal.jsx        # root component: layout, theme state, scroll handling
    useTerminal.js       # input state, history navigation, autocomplete
    runCommand.jsx       # maps a typed command to its output component
    commandList.js       # command registry (names + descriptions), drives `help`/autocomplete
    commands/            # one component per command's output
```

To add a new command: add its `{ cmd, description }` to `commandList.js`,
create a component under `commands/`, and wire it up in `runCommand.jsx`.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # eslint
npm run build    # production build to dist/
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yaml`, which builds
the site and publishes it to GitHub Pages.
