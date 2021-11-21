import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/Pages/Top";
import { Users } from "../components/Pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/">
          <Top />
        </Route>
        <Route to="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
