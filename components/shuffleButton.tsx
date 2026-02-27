"use client";

export default function ShuffleButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="group relative flex items-center px-3 py-1 font-cinzel
                border border-white/10 hover:border-white/25
                transition-colors duration-500 cursor-pointer text-left h-full"
        >
            <span className="absolute bottom-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            <span className="absolute top-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute top-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            <span className="text-white/40 group-hover:text-white/70 transition-colors duration-500 text-xs tracking-widest uppercase">
                Shuffle
            </span>
        </button>
    );
}