import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import NotFound from "../pages/NotFound/NotFound";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>

      },
      {
        path: "/stats",
        element: <Stats></Stats>
      },
      
    ],

  },

  {
  path: "*",
  element: <NotFound />
}
]);
