import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({ params }) {
  console.log("start");
  const { id } = params;
  console.log("end");
  return (
    <>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading videos info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
