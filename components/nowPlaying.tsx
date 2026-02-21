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
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mx-auto">
                <span className="font-cinzel text-xs tracking-widest text-white/30">Sam's not listening to anything right now</span>
            </div>
        );
    }

    return (
        <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-purple-600/70 transition-colors group"
        >
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
                        className="w-[3px] bg-purple-600 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s`, height: `${i * 4 + 4}px` }}
                    />
                ))}
            </div>
        </a>
    );
}