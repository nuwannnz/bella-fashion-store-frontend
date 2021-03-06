import React from "react";
import "./styles/AppShell.css";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { adminPanelStore, customerStore } from "./redux/store";
import { ROUTE_PATHS } from "./constants";
import CustomerShell from "./pages/customer/CustomerShell";
import LoadingAnimation from "./components/common/LoadingAnimation";
import { history } from "./helpers/navigation.helper";
import AdminPanelShell from "./pages/admin-panel/AdminPanelShell";
import PopupContainer from "./components/common/PopupContainer";
import ToastManger from "./components/common/ToastManager";



function AppShell() {
  return (
    <div className="app-wrap flex flex-r">
      <Router history={history}>
        <Switch>

          <Route path={ROUTE_PATHS.ADMIN_SHELL}>
            <Provider store={adminPanelStore}>
              <AdminPanelShell />
              <LoadingAnimation />
              <PopupContainer />
              <ToastManger />
            </Provider>
          </Route>


          <Route path={ROUTE_PATHS.CUSTOMER_SHELL}>
            <Provider store={customerStore}>
              <CustomerShell />
              <LoadingAnimation />
              <PopupContainer />
              <ToastManger />
            </Provider>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default AppShell;
