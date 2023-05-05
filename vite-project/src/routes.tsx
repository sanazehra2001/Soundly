import { Suspense, lazy } from "react";
import LoadingScreen from "./components/Navbar";
import type { RouteObject } from "react-router";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./pages/Home")));
const Playlists = Loadable(lazy(() => import("./pages/Playlists")));
const Queues = Loadable(lazy(() => import("./pages/Queues")));
const AboutUs = Loadable(lazy(() => import("./pages/AboutUs")));
const Feed = Loadable(lazy(() => import("./pages/Feed")));

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/playlists",
    children: [
      {
        index: true,
        element: <Playlists />,
      },
    ],
  },

  {
    path: "/queues",
    children: [
      {
        index: true,
        element: <Queues />,
      },
    ],
  },

  {
    path: "/about-us",
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
    ],
  },

  {
    path: "/feed",
    children: [
      {
        index: true,
        element: <Feed />,
      },
    ],
  },
];

export default routes;
