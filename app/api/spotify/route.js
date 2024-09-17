import { fetchSpotifyData } from '../../../lib/spotify';

export async function GET(request) {

  try {
    const spotifyData = await fetchSpotifyData();

    return new Response(JSON.stringify(spotifyData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);

    return new Response(JSON.stringify({ error: 'Failed to fetch Spotify data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  }
}
