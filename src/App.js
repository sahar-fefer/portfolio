import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import SideNav from './components/sideNav';
import Home from './components/home';
import About from "./components/about";

function App() {
  return (
    <Router>
      <SideNav />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
            <About/>
          </Route>

          {/* <Route path='/404' component={PageNotFound} /> */}
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
