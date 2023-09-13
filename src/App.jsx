import {
  BrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import MoviesToWatch from "./pages/MoviesToWatch";
import WatchedMovies from "./pages/WatchedMovies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovieDetailsProvider } from "./context/MovieListContext";
import ErrorPage from "./ErrorPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Homepage />,
//       },
//       {
//         path: "/search",
//         element: <Search />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/watchlist",
//         element: <MoviesToWatch />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/watched",
//         element: <WatchedMovies />,
//         errorElement: <ErrorPage />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <MovieDetailsProvider>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="search" element={<Search />} />
              <Route path="watchlist" element={<MoviesToWatch />} />
              <Route path="watched" element={<WatchedMovies />} />
            </Route>
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </MovieDetailsProvider>
  );
}

export default App;
