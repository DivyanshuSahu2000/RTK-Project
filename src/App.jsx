import { fetchGif, fetchPhotos, fetchVideos } from "./api/mediaApi";

const getPhotos = async () => {
  const data = await fetchPhotos("cat");
  console.log(data.results);
};

const getVideos = async () => {
  const data = await fetchVideos("cat");
  console.log(data.videos);
};

const getGifs = async () => {
  const data = await fetchGif("cat");
  console.log(data.results);
};

function App() {
  return (
    <>
      <div className="h-screen w-full bg-gray-900 text-white">
        hh
        <button className="bg-red-300 p-3 m-2.5" onClick={getPhotos}>
          Get Photo
        </button>
        <button className="bg-green-300 p-3 m-2.5" onClick={getVideos}>
          Get Video
        </button>
        <button className="bg-blue-300 p-3 m-2.5" onClick={getGifs}>
          Get Gifs
        </button>
      </div>
    </>
  );
}

export default App;
