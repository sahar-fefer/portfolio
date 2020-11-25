import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './components/home';
import SideNav from './components/sideNav';

function App() {
  return (
    <Router>
      <SideNav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path='/404' component={PageNotFound} /> */}
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
