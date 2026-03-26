export interface Line {
  type: "cmd" | "output" | "label" | "prompt" | "success";
  text: string;
}

export default function TerminalPreview({ lines }: { lines: Line[] }) {
  const colours: Record<Line["type"], string> = {
    cmd:     "text-green-400/70",
    output:  "text-white/40",
    label:   "text-purple-400/70",
    prompt:  "text-yellow-400/60",
    success: "text-green-400/60",
  };

  return (
    <div className="rounded-sm border border-white/10 overflow-hidden font-mono text-xs mb-4">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60" />
      </div>
      <div className="p-4 space-y-1 bg-black/40">
        {lines.map((line, i) => (
          <p key={i} className={`leading-relaxed ${colours[line.type]}`}>
            {line.type === "cmd" && <span className="text-white/20 mr-2">$</span>}
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}