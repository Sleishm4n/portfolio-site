import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
        return null;
    }

    try {
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: REFRESH_TOKEN,
            }),
            cache: "no-store",
        });

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch {
        return null;
    }
};

export async function GET() {
    try {
        const tokenData = await getAccessToken();

        if (!tokenData?.access_token) {
            return NextResponse.json({ isPlaying: false });
        }

        const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
            },
            cache: "no-store",
        });

        if (res.status === 204 || res.status > 400) {
            return NextResponse.json({ isPlaying: false });
        }

        const song = await res.json();

        if (!song || !song.item) {
            return NextResponse.json({ isPlaying: false });
        }

        return NextResponse.json({
            isPlaying: Boolean(song.is_playing),
            title: song.item.name ?? "",
            artist: song.item.artists?.map((a: { name: string }) => a.name).join(", ") ?? "",
            albumArt: song.item.album?.images?.[0]?.url ?? "",
            songUrl: song.item.external_urls?.spotify ?? "",
        });
    } catch {
        return NextResponse.json({ isPlaying: false });
    }
}