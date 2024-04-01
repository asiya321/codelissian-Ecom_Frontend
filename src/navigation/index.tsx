import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import * as AdminLoadable from "./ScreenContainer/AdminLoad";
import * as AuthLoadable from "./ScreenContainer/AuthLoad";
import AppRoutes from "./appRoutes";

function Application() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminLoadable.Homepage />} path={AppRoutes.HOMEPAGE} />
        <Route
          element={<AdminLoadable.ProductDetail />}
          path={AppRoutes.PRODUCTDETAIL}
        />
        <Route element={<AuthLoadable.Login />} path={AppRoutes.LOGIN} />
      </Routes>
    </Router>
  );
}

export default Application;
