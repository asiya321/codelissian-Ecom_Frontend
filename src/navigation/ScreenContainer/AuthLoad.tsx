import Loadable from "react-loadable";

import { Spinner } from "components/Loader";

export const Login = Loadable({
  loader: () => import("pages/Login"),
  loading: () => <Spinner />,
});
