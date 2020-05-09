import React from "react";
import "./styles/AppShell.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { adminPanelStore, customerStore } from "./redux/store";
import { ROUTE_PATHS } from "./Constants";
import AdminPanelShell from "./pages/admin-panel/AdminPanelShell";
import CustomerShell from "./pages/customer/CustomerShell";
import LoadingAnimation from "./components/common/LoadingAnimation";
import AdminProductPage from "./pages/admin-panel/product/AdminProductPage";
import ProductPage from "./pages/customer/ProductPage";
import AdminAddProductsForm from "./components/admin/forms/AdminAddProductsForm";



function AppShell() {
  return (
    <Router>
      <div className="app-wrap flex flex-r">
        <Switch>
          <Route path={ROUTE_PATHS.ADMIN_SHELL}>
            <Provider store={adminPanelStore}>
              <AdminPanelShell />
            </Provider>
          </Route>

          <Route path={ROUTE_PATHS.CUSTOMER_SHELL}>
            <Provider store={customerStore}>
              <CustomerShell />
            </Provider>
          </Route>
        
        </Switch>

      </div>
    </Router>
  );
}

export default AppShell;
