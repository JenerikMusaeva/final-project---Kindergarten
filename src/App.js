import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import './style.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import Garten from "./pages/Garten";
import Group from "./pages/Group";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />

          <div className="content">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/:gartenid" exact component={Garten} />
              <Route path="/garten/group" exact component={Group} />
              <Route path="/admin/:path" exact component={Admin} />

              {/* <Route path="/login" exact component={Login} /> */}
              {/* <Route path="/register" exact component={Register} /> */}
            </Switch>
          </div>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
