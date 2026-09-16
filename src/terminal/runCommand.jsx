import About from "./commands/About";
import Experience from "./commands/Experience";
import Projects from "./commands/Projects";
import Skills from "./commands/Skills";
import Contact from "./commands/Contact";
import Help from "./commands/Help";
import History from "./commands/History";
import ThemesOutput from "./commands/ThemesOutput";
import UnknownCommand from "./commands/UnknownCommand";
import { themeNames } from "./commandList";

export function runCommand(rawInput, ctx) {
  const trimmed = rawInput.trim();
  if (!trimmed) return null;

  const [cmdWord, ...rest] = trimmed.split(/\s+/);
  const cmd = cmdWord.toLowerCase();

  switch (cmd) {
    case "help":
      return <Help />;
    case "about":
    case "whoami":
      return <About />;
    case "experience":
    case "experiences":
      return <Experience />;
    case "projects":
      return <Projects />;
    case "skills":
    case "tech":
      return <Skills />;
    case "contact":
      return <Contact />;
    case "history":
      return <History history={ctx.history} />;
    case "themes":
    case "theme": {
      const arg = rest[0];
      if (arg) {
        const normalized = arg.toLowerCase();
        if (themeNames.includes(normalized)) {
          ctx.setTheme(normalized);
          return (
            <ThemesOutput mode="set" theme={normalized} available={themeNames} />
          );
        }
        return (
          <ThemesOutput mode="invalid" theme={normalized} available={themeNames} />
        );
      }
      return (
        <ThemesOutput mode="list" current={ctx.theme} available={themeNames} />
      );
    }
    default:
      return <UnknownCommand cmd={cmdWord} />;
  }
}
