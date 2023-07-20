import getVideos from "@/actions/getVideos";
import VideoPreview from "@/components/VideoPreview";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
      <div className="max-w-xl mx-auto px-4 py-4">
        <h2 className="mb-6 mt-12 text-2xl font-bold leading-tight text-primary">
          Videos
        </h2>
        {/* <pre>{JSON.stringify(videos, null, 2)}</pre> */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {videos.map((video) => {
            return <VideoPreview key={video.id} video={video} />;
          })}
        </div>
        ;
      </div>
    </main>
  );
}
