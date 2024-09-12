import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';


const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let isConnected = false;

async function connectToMongo() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log('Connected to MongoDB');
  }
}

async function storeDataInMongo(currentlyPlaying, recentlyPlayed) {
  try {
    await connectToMongo();

    const db = client.db('spotify');
    const collection = db.collection('tracks');

    // if (currentlyPlaying && currentlyPlaying.item) {
    //   const songName = currentlyPlaying.item.name;
    //   const songUrl = currentlyPlaying.item.external_urls.spotify || currentlyPlaying.item.album.external_urls.spotify;

    //   const songData = {
    //     songName,
    //     songUrl,
    //     timestamp: new Date(currentlyPlaying.timestamp),
    //     type: 'currentlyPlaying',
    //   };

    //   await collection.updateOne(
    //     { _id: 'latest' },
    //     { $set: songData },
    //     { upsert: true }
    //   );
    // }

    // if (recentlyPlayed && recentlyPlayed.length > 0) {
    //   const recentlyPlayedData = recentlyPlayed.map((song) => ({
    //     songName: song.track.name,
    //     songUrl: song.track.external_urls.spotify || song.track.album.external_urls.spotify,
    //     timestamp: new Date(song.played_at),
    //     type: 'recentlyPlayed',
    //   }));


    //Temporary workaround for currently playing
    if (recentlyPlayed && recentlyPlayed.length > 0) {
      const mostRecent = recentlyPlayed[0];
      const mostRecentData = {
        songName: mostRecent.track.name,
        songUrl: mostRecent.track.external_urls.spotify || mostRecent.track.album.external_urls.spotify,
        timestep: new Date(mostRecent.played_at),
        type: 'mostRecent',
      }
      await collection.updateOne(
        { _id: 'latest' },
        { $set: mostRecentData },
        { upsert: true }
      );
    }

    //Most recent songs
    if (recentlyPlayed && recentlyPlayed.length > 0) {
      const recentlyPlayedData = recentlyPlayed.slice(1).map((song) => ({
        songName: song.track.name,
        songUrl: song.track.external_urls.spotify || song.track.album.external_urls.spotify,
        timestamp: new Date(song.played_at),
        type: 'recentlyPlayed',
      }));

      await collection.insertMany(recentlyPlayedData);
    }

    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data in MongoDB:', error);
    throw error;
  }
}


export async function POST(request) {
  try {
    const spotifyData = await request.json();

    if (!spotifyData) {
      return new NextResponse('No data provided', { status: 400 });
    }

    // const { currentlyPlaying } = await spotifyData;
    // const { recentlyPlayed } = await spotifyData;


    // await storeDataInMongo(currentlyPlaying, recentlyPlayed);
    await storeDataInMongo(null, spotifyData)

    return new NextResponse('Data stored successfully', { status: 200 });
  } catch (error) {
    return new NextResponse('Error storing data', { status: 500 });
  }
}
