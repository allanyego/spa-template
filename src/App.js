import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Suspense } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./styles.css";
import Loading from "./components/Spinner";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />

            {/* Redirect all other to home page */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}
