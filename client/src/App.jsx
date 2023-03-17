import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Profiles from "./routes/profiles";
import Thoughts from "./routes/thoughts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profiles",
        element: <Profiles />,
      },
      {
        path: "/thoughts",
        element: <Thoughts />,
      },
    ],
  },
]);

export default function App() {
  return <Thoughts />;
}
