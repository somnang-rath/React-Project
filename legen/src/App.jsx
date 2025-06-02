import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./page/Home";
import DiamondMemberPage from "./page/DiamondMemberPage";
import DetailMovie from "./page/DetailMovie";
import Cinemas from "./page/cinema";
import LocationDetail from "./page/LocationDetail";
import Offers from "./page/Offers";
import OffersDetail from "./page/OffersDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <DetailMovie />,
      },
      {
        path: "location/:id",
        element: <LocationDetail />,
      },
      {
        path: "offers/:id",
        element: <OffersDetail />,
      },
      {
        path: "cinemas",
        element: <Cinemas />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "f&b",
        element: <h1>F&B</h1>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
