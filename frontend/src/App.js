import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Setting from "./components/Setting";
import UpdateUser from "./components/UpdateUser";
import ViewDetails from "./components/ViewDetails";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Login} />
        <Route path="/viewdetails/:id" component={ViewDetails} />
        <Route path="/update/:id" component={UpdateUser} />
        <Route path="/setting" component={Setting} />
      </Router>
    );
  }
}

export default App;
