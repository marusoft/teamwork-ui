import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/pages/register/Register"
import Login from "./components/pages/login/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="404" /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;