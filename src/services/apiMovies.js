const KEY = "c573a666";

export async function getMovies(query) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
  const data = await res.json();
  return data;
}
