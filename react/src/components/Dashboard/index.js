import { NavCustomer, NavAdmin } from "../Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
//import "./components/Dashboard/index.css";

const AppCustomer = () => {
  return (
    <Router>
      <NavCustomer />
    </Router>
  );
};

const AppAdmin = () => {
  return (
    <Router>
      <NavAdmin />
      <Switch>
        <Route path="/account/products" component={Products} />
        <Route path="/account/inventory" component={Inventory} />
      </Switch>
    </Router>
  );
};
export { AppCustomer, AppAdmin };
