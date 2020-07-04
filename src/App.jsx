import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BetList from "./components/BetList";
import SList from "./components/SList";
import NewBet from "./forms/NewBet";
import WinnersList from "./components/WinnersList";

function App() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/sList" component={SList} />
      <Route path="/betList" component={BetList} />
      <Route path="/addBet" component={NewBet} />
      <Route path="/winnersList" component={WinnersList} />
    </Switch>
  );
}

export default App;
