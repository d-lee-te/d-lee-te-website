import DesktopComponent from "@/components/DesktopComponent";
import MobileComponent from "@/components/MobileComponent";

import clientPromise from "@/lib/mongodb";

export default async function Home() {
  
  const recentMusic = await getRecentMusic();
  return (
      <div>
        <div className="lg:hidden">
          <MobileComponent recentMusic= {recentMusic}/>
        </div>
        <div className="hidden lg:inline-block">
          <DesktopComponent recentMusic= {recentMusic}/>
        </div>
      </div>
  );
}

async function getRecentMusic() {
  try {
    const client = await clientPromise;
    const db = client.db("spotify");
    const stats = await db.collection("tracks").find({}).toArray();
    const plainSongs = stats.map(song => ({
      _id: song._id.toString(),
      songName: song.songName,
      songUrl: song.songUrl,
      timestamp: song.timestamp,
      type: song.type,
    }));
    return plainSongs;
  } catch (e) {
    console.error(e);
  }
  return [];
}
