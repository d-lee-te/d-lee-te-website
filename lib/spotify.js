let accessToken = '';
let expiresAt = 0;

export async function getAccessToken() {
  const {
    SPOTIFY_CLIENT_ID: clientId,
    SPOTIFY_CLIENT_SECRET: clientSecret,
    SPOTIFY_REFRESH_TOKEN: refreshToken,
  } = process.env;

  if (accessToken && Date.now() < expiresAt) {
    return accessToken;
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Failed to refresh access token:', data);
    throw new Error('Failed to refresh access token');
  }

  accessToken = data.access_token;
  const expiresIn = data.expires_in;
  expiresAt = Date.now() + expiresIn * 1000;

  console.log('Access token refreshed successfully');

  return accessToken;
}

export async function fetchSpotifyData() {
  const accessToken = await getAccessToken();

  try {
    const timestamp = Date.now()
    const [recentTracksResponse, currentlyPlayingResponse] = await Promise.all([
      fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=50&before=${timestamp}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    ]);

    if (!recentTracksResponse.ok) {
      const errorData = await recentTracksResponse.json();
      console.error('Failed to fetch recent tracks:', errorData);
      throw new Error('Failed to fetch recent tracks');
    }

    if (!currentlyPlayingResponse.ok) {
      if (currentlyPlayingResponse.status === 204) {
        console.log('No currently playing track (204 status)');
        return {
          recentTracks: await recentTracksResponse.json().then((data) => data.items || []),
          currentlyPlaying: null,
        };
      } else {
        const errorData = await currentlyPlayingResponse.json();
        console.error('Failed to fetch currently playing track:', errorData);
        throw new Error('Failed to fetch currently playing track');
      }
    }

    const recentTracksData = await recentTracksResponse.json();
    const currentlyPlayingData = await currentlyPlayingResponse.json();

    console.log('Successfully fetched recent tracks and currently playing track');

    return {
      recentTracks: recentTracksData.items || [],
      currentlyPlaying: currentlyPlayingData.item || null,
    };
  } catch (error) {
    console.error('Error fetching Spotify data:', error.message);
    throw new Error('Error fetching Spotify data');
  }
}
