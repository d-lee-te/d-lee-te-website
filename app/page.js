import DesktopComponent from "@/components/Desktop/DesktopComponent";
import MobileComponent from "@/components/Mobile/MobileComponent";
import ParticleBackground from "@/components/ParticleBackground";
import { SpotifyProvider } from '@/hooks/SpotifyContext';

export default async function Home() {

  const recentSongs = await fetchRecentSongs();
  
  return (
      <div>

        <ParticleBackground className="fixed inset-0 w-full h-full -z-0"/>

        <div className="lg:hidden">
          <MobileComponent/>
        </div>

        <div className="hidden lg:inline-block">
          <SpotifyProvider recentSongs={recentSongs}>
            <DesktopComponent/>
          </SpotifyProvider>
        </div>
        
      </div>
  );
}


async function fetchRecentSongs() {
  try {
    const response = await fetch('https://dleete.dev/api/spotify'); // Replace with your actual API endpoint
    const data = await response.json();

    if (data.error) {
      console.error('Error fetching Spotify data:', data.error);
      return [];
    }

    const recentTracks = data.recentTracks || [];
    const sortedSongs = recentTracks.sort(
      (a, b) => new Date(b.played_at) - new Date(a.played_at)
    );

    return sortedSongs.slice(0, 5); // Return the top 5 most recent songs
  } catch (error) {
    console.error('Failed to fetch recent songs:', error);
    return [];
  }
}

