import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import ListOfChildren from "../components/ListOfChildren";
import Branches from "../components/Branches";
import Report from "../components/Report";
import Attendance from "../components/Attendance";

export default function Admin() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 sidebar">
              <NavLink
                to="/attendance"
                className="btn btn-nav"
                activeClassName="active"
              >
                Ведомость посещаемости
              </NavLink>

              <NavLink
                to="/branches"
                className="btn btn-nav"
                activeClassName="active"
              >
                Филиалы
              </NavLink>

              <NavLink
                to="/listofchildren"
                className="btn btn-nav"
                activeClassName="active"
              >
                Воспитанники
              </NavLink>

              <NavLink
                to="/report"
                className="btn btn-nav"
                activeClassName="active"
              >
                Отчет посещаемости
              </NavLink>
            </div>

            <div className="col-6 content">
              <Switch>
                <Route
                  path="/listofchildren"
                  exact
                  component={ListOfChildren}
                />
                <Route path="/branches" exact component={Branches} />
                <Route path="/report" exact component={Report} />
                <Route path="/attendance" exact component={Attendance} />

                {/* <Route path="/login" exact component={Login} /> */}
                {/* <Route path="/register" exact component={Register} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
