import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/apiMovies";

export function useMovies(query) {
  const { data, isLoading, error, refetch } = useQuery(
    ["movies", query],
    () => getMovies(query),
    {
      enabled: false, // Data fetching will be disabled by default
    }
  );

  return { data, isLoading, error, refetch };
}
