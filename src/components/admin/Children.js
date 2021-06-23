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

  const {
    children: { value: children },
  } = useSelector((state) => state.children);

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
    dispatch(fetchChildren());
  }, []);

  const {
    groups: { value: groups, error },
  } = useSelector((state) => state.groups);

  const {
    gartens: { value: gartens },
  } = useSelector((state) => state.gartens);

  const [selectedGarten, setSelectedGarten] = useState(-1);
  const [selectedGroup, setSelectedGroup] = useState(groups);

  useEffect(() => {
    setSelectedGroup(() => {
      if (Number(selectedGarten) === -1) {
        return groups;
      }
      return groups.filter(
        (group) => Number(group.kinderGarden.id) === Number(selectedGarten)
      );
    });
  }, [selectedGarten, groups.length]);

  let [filteredChildren, setFilteredChildren] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredChildren = children
      .filter((child) => {
        let searchStr = search.toLowerCase();
        let childName = (child.firstName + " " + child.lastName).toLowerCase();
        return childName.indexOf(searchStr) > -1;
      })
      .filter((child) => {
        // return Number(child.kinderGarden.id) === Number(selectedGarten)
      });

    // .filter((child) => Number(child.group.id) === Number(selectedGroup));
  }, [children]);

  console.log("1", children);
  console.log("2", filteredChildren);

  const handleSearch = (e) => {
    setSearch({ ...search, search: e.target.value });
  };

  const handleChangeGarten = (e) => {
    setSelectedGarten(e.target.value);
  };

  const handleChangeGroup = (e) => {
    setSelectedGroup(e.target.value);
  };

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
        <div className="col-4">
          <p>Выберите группу</p>
          <select
            onChange={handleChangeGroup}
            disabled={loading}
            className="form-select col-1"
          >
            {selectedGroup.map((group) => {
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
            {error && <div className="alert alert-danger">Error!</div>}
            {!children.length && (
              <div className="alert alert-danger">Список пуст!</div>
            )}
            {children.map((child) => (
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
