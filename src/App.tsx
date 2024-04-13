import Navbar from "./Components/Navbar";
import "./App.css";
import Quiz from "./Components/Quiz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
      <div className="app">
    <Navbar/>
    <div className="content">
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/quiz">
          <Quiz/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
