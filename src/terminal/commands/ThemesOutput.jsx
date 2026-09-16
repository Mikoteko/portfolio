const ThemesOutput = ({ mode, theme, current, available }) => {
  if (mode === "set") {
    return (
      <p>
        theme set to <span className="text-[var(--term-accent)]">{theme}</span>
      </p>
    );
  }

  if (mode === "invalid") {
    return (
      <p className="text-[var(--term-error)]">
        unknown theme "{theme}". available: {available.join(", ")}
      </p>
    );
  }

  return (
    <div>
      <p className="text-[var(--term-dim)] mb-1">Usage: themes [name]. Available:</p>
      {available.map((t) => (
        <p key={t}>
          {t === current ? "> " : "  "}
          {t}
        </p>
      ))}
    </div>
  );
};

export default ThemesOutput;
