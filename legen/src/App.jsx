import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./page/Home";
import DiamondMemberPage from "./page/DiamondMemberPage";
import DetailMovie from "./page/DetailMovie";
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
        path: ":id",
        element: <DetailMovie />,
      },
      {
        path: "cinemas",
        element: <DiamondMemberPage />,
      },
      {
        path: "offers",
        element: <h1>Offers</h1>,
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
