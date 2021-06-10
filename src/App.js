import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Admin from "./pages/Admin";

import ListOfChildren from "./components/ListOfChildren";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />

          <div className="content">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/admin" exact component={Admin} />

              <Route path="/listofchildren" exact component={ListOfChildren} />
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
