
import { useContext } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import routes from "./routes";
import AppLayout from "../Components/AppLayout";
import LoginPage from "../Login/LoginPage";
import DashboardPage from "../Dashboard/DashboardPage";
import LandingPage from "../Landing/LandingPage";
import DefaultPage from "../Landing/DefaultPage";
import AppointmentPage from "../Landing/AppointmentPage";
import LinkPage from "../Landing/LinkPage";
import ConversationPage from "../Landing/ConversationPage";


export default function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path={routes.ROOT} element={<DashboardPage />} />
        {/* <Route path={routes.LOGIN} element={<LoginPage />} /> */}
        <Route
          path={routes.ROOT}
          element={
            // <AuthenticatedRoute
            //   role={PortalUserRole.HRBP}
            //   fallbackRoute={routes.ROOT}
            // >
            <AppLayout />
            // </AuthenticatedRoute>
          }
        >
          <Route path={routes.INTERACTIVE} element={<LandingPage />} />
          <Route path={routes.DEFAULT} element={<DefaultPage />} />
          <Route path={routes.APPOINTMENT} element={<AppointmentPage />} />
          <Route path={routes.LINK} element={<LinkPage />} />
          <Route path={routes.CONVERSATION} element={<ConversationPage />} />
        </Route>

      </Routes>

    </Router>
  );
}
