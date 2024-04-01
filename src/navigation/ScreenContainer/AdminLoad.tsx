import Loadable from "react-loadable";

import { Spinner } from "components/Loader";

export const Homepage = Loadable({
  loader: () => import("pages/LandingPage/index"),
  loading: () => <Spinner />,
});

export const ProductDetail = Loadable({
  loader: () => import("pages/ProductDetail/index"),
  loading: () => <Spinner />,
});
