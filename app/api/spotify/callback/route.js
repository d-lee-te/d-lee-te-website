import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
    const { code } = await request.json();
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
    
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            },
        });

        return NextResponse.json({ accessToken: response.data.access_token });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to authenticate' }, { status: 500 });
    }
}
