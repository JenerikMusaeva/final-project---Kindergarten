import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Child from "./Child";
import { fetchChildren } from "../../store/actions/children";
import { fetchGartens } from "../../store/actions/gartens";
import { fetchGroups } from "../../store/actions/groups";

export default function Children() {
  let dispatch = useDispatch();

  const {
    children: { loading: childrenLoading, value: children },
  } = useSelector((state) => state.children);

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
    dispatch(fetchChildren());
  }, []);

  const {
    groups: { loading: groupsLoading, value: groups },
  } = useSelector((state) => state.groups);

  const {
    gartens: { loading: gartensLoading, value: gartens },
  } = useSelector((state) => state.gartens);

  const [activeGarten, setActiveGarten] = useState(-1);

  const [activeGroups, setActiveGroups] = useState(groups);

  useEffect(() => {
    setActiveGroups(() => {
      if (Number(activeGarten) === -1) {
        return groups;
      }
      return groups.filter(
        (group) => Number(group.kinderGarden.id) === Number(activeGarten)
      );
    });
  }, [activeGarten, groups.length]);

  // let [filteredChildren, setFilteredChildren] = useState([]);

  // let [search, setSearch] = useState("");

  // let [filterChildren, setFilterChildren] = useState(children);
  // let [selectedgarten, setSelectedgarten] = useState("-1");
  // let [selectedgroup, setSelectedgroup] = useState("-1");

  // const handleSearch = (e) => {
  //   setSearch({ ...search, search: e.target.value });
  // };

  // useEffect(() => {
  //   setFilteredChildren = children
  //     .filter((item) => {
  //       let searchStr = search.toLowerCase();

  //       let childName = (item.firstName + " " + item.lastName).toLowerCase();
  //       // return childName.indexOf(searchStr) > -1;
  //     })
  //     .filter((child) => {

  //     });
  // }, []);

  return (
    <>
      <div className="col-8">
        <input
          className="form-control col-sm-6 mr-3 mb-3"
          // onChange={handleSearch}
          type="text"
          name="findChild"
          // value={search}
          placeholder="Поиск воспитанника"
        />
      </div>
      <div className="row">
        <div className="col-4">
          <select
            onChange={(event) => setActiveGarten(event.target.value)}
            disabled={gartensLoading}
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
          <p>Выберите филиал</p>
        </div>
        <div className="col-4">
          <select disabled={groupsLoading} className="form-select col-1">
            {activeGroups.map((group) => {
              return (
                <option value={group.id} key={group.id}>
                  {group.name}
                </option>
              );
            })}
          </select>
          <p>Выберите группу</p>
        </div>
      </div>

      {childrenLoading ? (
        <div> Загрузка воспитанников </div>
      ) : (
        <>
          <h4>Список воспитанников</h4>
          <div>
            {children.map((child) => (
              <Child data={child} key={child.id} />
            ))}

            <Link
              disabled={childrenLoading}
              to="/admin/addchild"
              className="btn btn-add"
            >
              Добавить воспитанника
            </Link>
          </div> 
        </>
      )}
    </>
  );
}
