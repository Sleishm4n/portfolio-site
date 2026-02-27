"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Song {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    albumArt?: string;
    songUrl?: string;
}

export default function NowPlaying() {
    const [song, setSong] = useState<Song>({ isPlaying: false });

    useEffect(() => {
        const fetchSong = async () => {
            const res = await fetch("/api/spotify");
            const data = await res.json();
            setSong(data);
        };

        fetchSong();
        const interval = setInterval(fetchSong, 30000);
        return () => clearInterval(interval);
    }, []);

    if (!song.isPlaying) {
        return (
            <div className="group relative flex items-center px-4 py-3 font-cinzel
                border border-white/10 hover:border-white/25
                transition-colors duration-500 cursor-default text-left h-full">
                <span className="absolute top-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
                <span className="absolute top-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
                <span className="font-cinzel text-xs tracking-widest text-white/30">Sam's not listening to anything right now</span>
            </div>
        );
    }

    return (
        <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-4 py-3 font-cinzel
                border border-white/10 hover:border-white/25
                transition-colors duration-500 cursor-pointer text-left h-full"
        >
            <span className="absolute top-0 left-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute top-0 left-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-2 h-px bg-purple-500/60" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-px h-2 bg-purple-500/60" aria-hidden="true" />
            {song.albumArt && (
                <Image
                    src={song.albumArt}
                    alt="Album art"
                    width={32}
                    height={32}
                    className="rounded-sm"
                />
            )}
            <div className="flex flex-col mx-auto">
                <span className="font-cinzel text-xs tracking-widest text-white/70 group-hover:text-white transition-colors ">
                    {song.title}
                </span>
                <span className="font-cinzel text-xs tracking-widest text-white/30">
                    {song.artist}
                </span>
            </div>
            {/* Animated equalizer bars */}
            <div className="flex items-end gap-0.5 h-4">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="w-0.75 bg-purple-600 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s`, height: `${i * 4 + 4}px` }}
                    />
                ))}
            </div>
        </a>
    );
}