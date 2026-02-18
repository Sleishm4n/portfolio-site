"use client";

export default function ShuffleButton({ onClick}: { onClick: () => void}) {
    return (
        <div
            onClick={onClick}
            className="mt-4 px-6 py-2 font-cinzel text-sm tracking-widest uppercase
                 text-white/40 hover:text-white/80
                 border border-white/10 hover:border-purple-500/30
                 transition-all duration-500 rounded-sm"
        >
            <h1 className="font-semibold">
                Shuffle
            </h1>
        </div>
    )
}