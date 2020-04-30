import React from "react";
import "./styles/AppShell.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { adminPanelStore, customerStore } from "./redux/store";
import { ROUTE_PATHS } from "./constants";
import AdminPanelShell from "./pages/admin-panel/AdminPanelShell";
import CustomerShell from "./pages/customer/CustomerShell";
import LoadingAnimation from "./components/common/LoadingAnimation";
import LoginForm from "./components/customer/LoginForm";


function AppShell() {
  return (
   
      <div>
      {/* <div className="app-wrap flex flex-r"> */}
      <Router>
        <Switch>
          <Route path={ROUTE_PATHS.ADMIN_SHELL}>
            <Provider store={adminPanelStore}>
              {/* <AdminPanelShell />
              <LoadingAnimation /> */}
            </Provider>
          </Route>


          <LoginForm />

          <Route path={ROUTE_PATHS.CUSTOMER_SHELL}>
            <Provider store={customerStore}>
              {/* <CustomerShell /> */}
            </Provider>
          </Route>
        </Switch>
        </Router>
      </div>
  );
}

export default AppShell;
