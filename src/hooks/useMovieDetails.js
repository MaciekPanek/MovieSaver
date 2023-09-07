import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/apiMovieDetails";

export function useMovieDetails(movieID) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["MovieDetails"],
    queryFn: () => getMovieDetails(movieID),
  });

  return { data, isLoading, error };
}
