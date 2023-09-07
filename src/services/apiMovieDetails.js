const KEY = "c573a666";

export async function getMovieDetails(selectedId) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
  );
  const data = await res.json();
  return data;
}
