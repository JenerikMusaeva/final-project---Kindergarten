import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Child from "./Child";
import { fetchChildren } from "../../store/actions/children";
import { fetchGartens } from "../../store/actions/gartens";
import { fetchGroups } from "../../store/actions/groups";

export default function Children() {
  let dispatch = useDispatch();

  const { loading } = useSelector((state) => state.appstate);
  const { children } = useSelector((state) => state.children);
  const { groups } = useSelector((state) => state.groups);
  const { gartens } = useSelector((state) => state.gartens);
  const [selectedGarten, setSelectedGarten] = useState("-1");
  const [selectedGroup, setSelectedGroup] = useState("-1");
  const [selectedGroupArray, setSelectedGroupArray] = useState([]);
  let [filteredChildren, setFilteredChildren] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
    dispatch(fetchChildren());
  }, []);

  useEffect(() => {
    setFilteredChildren(
      children
        .filter((child) => {
          let searchStr = search.toLowerCase();
          let childName = child.fullName.toLowerCase();
          return childName.indexOf(searchStr) > -1;
        })
        .filter((child) => {
          if (selectedGarten === "-1") return true;
          return Number(child.group.kinderGarden.id) === Number(selectedGarten);
        })
        .filter((child) => {
          if (selectedGroup === "-1") return true;
          return Number(child.group.id) === Number(selectedGroup);
        })
    );
  }, [children, selectedGarten, selectedGroup, search]);

  useEffect(() => {
    setSelectedGroupArray(() => {
      if (selectedGarten === "-1") return groups;
      return groups.filter((g) => g.kinderGarden.id === Number(selectedGarten));
    });
  }, [selectedGarten]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeGarten = (e) => {
    setSelectedGarten(e.target.value);
  };

  const handleChangeGroup = (e) => {
    setSelectedGroup(e.target.value);
  };

  return (
    <>
      <div className="col-12 col-md-8">
        <input
          className="form-control col-12 col-md-6 mr-3 mb-3"
          onChange={handleSearch}
          type="text"
          name="findChild"
          value={search}
          placeholder="Поиск воспитанника"
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <p>Выберите филиал</p>
          <select
            onChange={handleChangeGarten}
            disabled={loading}
            className="form-select col-1"
          >
            <option value="-1">Все</option>
            {gartens.map((garten) => {
              return (
                <option key={garten.id} value={garten.id}>
                  {garten.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-12 col-md-4">
          <p>Выберите группу</p>

          <select
            onChange={handleChangeGroup}
            disabled={loading}
            className="form-select col-1"
          >
            <option value="-1">Все</option>
            {selectedGroupArray.map((group) => {
              return (
                <option value={group.id} key={group.id}>
                  {group.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {loading ? (
        <div> Загрузка воспитанников </div>
      ) : (
        <>
          <h4>Список воспитанников</h4>
          <div>
            {/* {error && <div className="alert alert-danger">Error!</div>} */}
            {!filteredChildren.length && children.length && (
              <div className="alert alert-danger">Список пуст!</div>
            )}
            {filteredChildren.map((child) => (
              <Child data={child} key={child.id} />
            ))}

            <Link to="/admin/addchild" className="btn btn-add">
              Добавить воспитанника
            </Link>
          </div>
        </>
      )}
    </>
  );
}
