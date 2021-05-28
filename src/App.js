import "./styles.css";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h3>I am doing Routing in React</h3>
      <Switch>
        <Route exact path="/route1" component={Route1} />
        <Route exact path="/route2" component={Route2} />
        <Route exact path="/route3" component={Route3} />
      </Switch>
    </div>
  );
}
const Route1 = () => {
  return <h1> I am Route1</h1>;
};

const Route2 = () => {
  return <h1> I am Route2</h1>;
};

const Route3 = () => {
  return <h1> I am Route3</h1>;
};
