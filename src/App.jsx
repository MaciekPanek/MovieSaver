import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import MoviesToWatch from "./pages/MoviesToWatch";
import WatchedMovies from "./pages/WatchedMovies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovieDetailsProvider } from "./context/MovieListContext";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/watchlist",
        element: <MoviesToWatch />,
      },
      {
        path: "/watched",
        element: <WatchedMovies />,
      },
    ],
  },
]);

function App() {
  return (
    <MovieDetailsProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Route path="/" component={Homepage} />
          <Route path="search" component={Search} />
          <Route path="watchlist" component={MoviesToWatch} />
          <Route path="watched" component={WatchedMovies} />
          <Route path="*" element={<Navigate to="/" />} />
        </RouterProvider>
      </QueryClientProvider>
    </MovieDetailsProvider>
  );
}

export default App;
