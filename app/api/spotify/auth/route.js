import { NextResponse } from 'next/server';

export async function GET() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
    const scopes = 'user-read-currently-playing user-read-recently-played user-read-playback-state';

    if (!clientId || !redirectUri) {
        return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 });
    }

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    return NextResponse.redirect(authUrl);
}
