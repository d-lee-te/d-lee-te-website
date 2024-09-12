import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
    const { accessToken } = await request.json();

    if (!accessToken) {
        return NextResponse.json(
            { error: 'Access token is required', accessToken: accessToken },
            { status: 400 }
        );
    }

    try {
        // const currentlyPlayingResponse = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`,
        //         'Content-Type': 'application/json',
        //     },
        // });

        const recentlyPlayedResponse = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            params: {
                limit: 6,
            },
        });

        // const responseData = {
        //     currentlyPlaying: currentlyPlayingResponse.data,
        //     recentlyPlayed: recentlyPlayedResponse.data.items
        // }

        // return NextResponse.json(responseData.data);
        return NextResponse.json(recentlyPlayedResponse.data.items);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
