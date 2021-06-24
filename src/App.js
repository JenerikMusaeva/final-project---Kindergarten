import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
              <Route path="/garten:gartenid" exact component={Garten} />
              <Route path="/garten:gartenid/group:groupid" exact component={Group} /> 
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
