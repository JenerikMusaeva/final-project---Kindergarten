import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import GartenPage from "./pages/Garten";
import Group from "./pages/Group";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  let { logined } = useSelector((state) => state.auth);

  useEffect(() => {
    
  }, )

  return (
    <>
      <Router>
          <Header />
          <div className="container container-sm">
          <div className="content">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/garten/:gartenid" exact component={GartenPage} />
              <Route path="/garten/:gartenid/group/:groupid" exact component={Group} /> 
              <PrivateRoute path="/admin/:path" exact component={Admin} auth={logined} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
