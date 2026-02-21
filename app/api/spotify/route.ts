import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const getAccessToken = async () => {
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
    });
    return res.json();
};

export async function GET() {
    const { access_token } = await getAccessToken();

    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (res.status === 204 || res.status > 400) {
        return NextResponse.json({ isPlaying: false });
    }

    const song = await res.json();

    return NextResponse.json({
        isPlaying: song.is_playing,
        title: song.item.name,
        artist: song.item.artists.map((a: { name: string }) => a.name).join(", "),
        albumArt: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
    });
}