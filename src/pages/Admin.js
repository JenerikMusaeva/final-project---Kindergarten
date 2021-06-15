import { NavLink, useParams } from "react-router-dom";

import AdminComponent from "../components/admin/AdminComponents";

export default function Admin() {

  let { path } = useParams();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidebar">
            
            <NavLink
              to="/admin/attendance"
              className="btn btn-nav"
              activeClassName="active"
            >
              Ведомость посещаемости
            </NavLink>

            <NavLink
              to="/admin/report"
              className="btn btn-nav"
              activeClassName="active"
            >
              Отчет посещаемости
            </NavLink>

            <NavLink
              to="/admin/groups"
              className="btn btn-nav"
              activeClassName="active"
            >
              Группы
            </NavLink>

            <NavLink
              to="/admin/children"
              className="btn btn-nav"
              activeClassName="active"
            >
              Воспитанники
            </NavLink>
          </div>

          <div className="col-9 content">
            <AdminComponent path={path} />
          </div>

        </div>
      </div>
    </>
  );
}
