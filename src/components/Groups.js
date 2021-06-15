import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "./Group";
import { fetchGroups } from "../store/actions/groups";

export default function Groups() {
  let dispatch = useDispatch();

  let { groups } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  let [filterGroups, setFilterGroups] = useState(groups);
  let [selectedBranch, setSelectedBranch] = useState("-1");

  useEffect(() => {
    setFilterGroups(() => {
      if (selectedBranch === "-1") return groups;

      return groups.filter((group) => group.kinderGarden.id === +selectedBranch);
    });
  }, [selectedBranch]);

  const handleChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <p>Выберите филиал</p>
          <select onChange={handleChange} name="garten_id" className="form-select">
            <option value="-1">Все</option>
            <option value="1">Филиал 1</option>
            <option value="2">Филиал 2</option>
            <option value="3">Филиал 3</option>
          </select>
        </div>
      </div>

      {/* {loading ? ( */}
      {/* <div> Загрузка филиалов </div> */}
      {/* ) : ( */}
      <>
        <h4>Список групп</h4>

        <div>
          {filterGroups.map((group) => (
            <Group data={group} key={group.id} />
          ))}

          <Link to="/admin/addgroup" className="btn btn-add">
            Добавить группу
          </Link>
        </div>
      </>
      {/* )} */}
    </>
  );
}
