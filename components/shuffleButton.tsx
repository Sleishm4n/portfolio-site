"use client";

export default function ShuffleButton({ onClick}: { onClick: () => void}) {
    return (
        <div
            onClick={onClick}
            className="pt-2 pb-1 rounded-md bg-jungle text-bg font-semibold hover:scale-105 hover:shadow-lg transition transform duration-200"
        >
            <h1 className=" font-semibold">
                Shuffle
            </h1>
        </div>
    )
}