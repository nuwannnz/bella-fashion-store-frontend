import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTE_PATHS, POPUP_KEYS } from "../../constants";
import { useDispatch } from "react-redux";
import {
  verifyStoredTokenAsync,
  checkHasAdminAsync,
} from "../../redux/actions/admin-panel/staff.actions";
import LoginPage from "./staff/LoginPage";
import AdminSignUpPage from "./staff/AdminSignUpPage";
import UpdateTemporaryPasswordPage from "./staff/UpdateTemporaryPasswordPage";
import "../../styles/admin/AdminPanelShell.css";

import { uiIsLoading } from "../../redux/actions/ui.actions";
import Dashboard from "./Dashboard";
import { usePopup } from "../../hooks/Popup.hooks";
import { UserForm } from "./user-dashboard/UserForm";
import ViewOrderForm from "./order-dashboard/ViewOrderForm";
import ReplyCustomerInquiryForm from "../../components/customer/ReplyCustomerInquiryForm";
import RoleForm from "./user-dashboard/RoleForm";
import BannerForm from "./homepage-dashboard/BannerForm";

function PrivateRoute({ children, ...rest }) {
  const token = useSelector((state) => state.staffLogin.auth.token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTE_PATHS.ADMIN_LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function AdminPanelShell() {
  const dispatch = useDispatch();
  const { registerPopup } = usePopup();

  const hasAdminChecked = useSelector(
    (state) => state.staffLogin.ui.checkedHasAdmin
  );
  const verifyedToken = useSelector(
    (state) => state.staffLogin.auth.tokenVerified
  );

  useEffect(() => {
    // set ui to loading

    // if we did not check has admin, check it
    if (!hasAdminChecked) {
      dispatch(uiIsLoading(true));

      dispatch(checkHasAdminAsync());
    }

    // if we did not checked the saved token, check it
    if (!verifyedToken) {
      dispatch(uiIsLoading(true));

      dispatch(verifyStoredTokenAsync());
    }

    if (verifyedToken && hasAdminChecked) {
      dispatch(uiIsLoading(false));
    }
  });

  useEffect(() => {
    registerPopup(POPUP_KEYS.USER_POPUP, UserForm);
    registerPopup(POPUP_KEYS.ORDER_INFO_POPUP, ViewOrderForm);
    registerPopup(POPUP_KEYS.REPLY_INQUIRY_POPUP, ReplyCustomerInquiryForm);
    registerPopup(POPUP_KEYS.ROLE_POPUP, RoleForm);
    registerPopup(POPUP_KEYS.ADD_BANNER_POPUP, BannerForm);

  }, [])


  return (
    <div id="adminPanelShell" className="admin-panel-wrap">
      <Switch>
        <Route path={`${ROUTE_PATHS.ADMIN_LOGIN}`}>
          <LoginPage />
        </Route>

        <Route path={ROUTE_PATHS.ADMIN_SIGNUP}>
          <AdminSignUpPage />
        </Route>

        <Route path={ROUTE_PATHS.ADMIN_UPDATE_TEMP_PWD}>
          <UpdateTemporaryPasswordPage />
        </Route>

        <PrivateRoute path={ROUTE_PATHS.ADMIN_DASHBOARD}>
          <Dashboard />
        </PrivateRoute>
        <Redirect path="*" to={ROUTE_PATHS.ADMIN_DASHBOARD} />
      </Switch>
    </div>
  );
}
