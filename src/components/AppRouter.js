import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { NavBar } from "./NavBar";
import { Menu } from "./Menu";
import { About } from "./About";
import { Contact } from "./Contact";
import { MainScreen } from "./MainScreen";
import { Projects } from "./Projects";

import { useState } from "react";

export const AppRouter = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      {/* <Menu menuIsOpen={menuIsOpen} /> */}
      <Router>
        <div>
          <div className="navbar">
            {" "}
            <NavBar setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
            <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </div>

          <Switch>
            <Route
              path="/personalweb/main"
              render={(o) => <MainScreen />}
            ></Route>
            <Route path="/personalweb/about" render={(o) => <About />}></Route>
            <Route
              path="/personalweb/projects"
              render={(o) => <Projects />}
            ></Route>
            <Route
              path="/personalweb/contact"
              render={(o) => <Contact />}
            ></Route>
            <Route
              path="/"
              render={(o) => <Redirect to="/personalweb/main" />}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
