import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Child from "./Child";
import { fetchChildren } from "../store/actions/children";

export default function Children() {
  let dispatch = useDispatch();

  let { children } = useSelector((state) => state.children);

  let [filteredChildren, setFilteredChildren] = useState([]);

  let [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchChildren());
  }, []);

  const handleSearch = (e) => {
    setSearch({ ...search, search: e.target.value });
  };

  useEffect(() => {
    setFilteredChildren = children
      .filter((item) => {
        let searchStr = search.toLowerCase();

        let studentName = (item.firstName + " " + item.lastName).toLowerCase();
        // return childName.indexOf(searchStr) > -1;
      })
      .filter((child) => {
        
      });
  }, []);

  return (
    <>
      <div className="col-8">
        <input
          className="form-control col-sm-6 mr-3 mb-3"
          onChange={handleSearch}
          type="text"
          name="findChild"
          value={search}
          placeholder="Поиск воспитанника"
        />
      </div>
      <div className="row">
        <div className="col-4">
          <select class="form-select col-1">
            <option value="-1">Все</option>
            <option value="1">Филиал 1</option>
            <option value="2">Филиал 2</option>
            <option value="3">Филиал 3</option>
          </select>
          <p>Выберите филиал</p>
        </div>
        <div className="col-4">
          <select class="form-select col-1">
            <option value="-1">Все</option>
            <option value="1">Группа 1</option>
            <option value="2">Группа 2</option>
            <option value="3">Группа 3</option>
          </select>
          <p>Выберите группу</p>
        </div>
      </div>

      {/* {loading ? (
        <div> Загрузка воспитанников </div>
      ) : ( */}
      <>
        <h4>Список воспитанников</h4>
        <div>
          {children.map((child) => (
            <Child data={child} key={child.id} />
          ))}

          <Link to="/admin/addchild" className="btn btn-add">
            Добавить воспитанника
          </Link>
        </div>
      </>
      {/* )} */}
    </>
  );
}
