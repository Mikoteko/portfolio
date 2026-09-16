const History = ({ history }) => {
  const chronological = [...history].reverse();

  if (chronological.length === 0) {
    return <p className="text-[var(--term-dim)]">No commands yet.</p>;
  }

  return (
    <div className="flex flex-col">
      {chronological.map((cmd, i) => (
        <p key={`${i}-${cmd}`}>
          <span className="text-[var(--term-dim)] inline-block w-8">{i + 1}</span>
          {cmd}
        </p>
      ))}
    </div>
  );
};

export default History;
