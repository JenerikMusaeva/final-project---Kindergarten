import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "./Group";
import { fetchGroups } from "../../store/actions/groups";
import { fetchGartens } from "../../store/actions/gartens";

export default function Groups() {
  let dispatch = useDispatch();

  const {
    groups: { loading: groupsLoading, value: groups },
  } = useSelector((state) => state.groups);

  const {
    gartens: { loading: gartensLoading, value: gartens },
  } = useSelector((state) => state.gartens);

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
  }, []);

  let [filterGroups, setFilterGroups] = useState(groups);
  let [selectedgarten, setSelectedgarten] = useState("-1");

  useEffect(() => {
    setFilterGroups(() => {
      if (selectedgarten === "-1") return groups;

      return groups.filter(
        (group) => group.kinderGarden.id === +selectedgarten
      );
    });
  }, [selectedgarten, groups]);

  const handleChange = (e) => {
    setSelectedgarten(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <p>Выберите филиал</p>
          <select
            onChange={handleChange}
            name="garten_id"
            className="form-select"
          >
            <option value="-1">Все</option>
            {gartens.map((garten) => {
              return (
                <option key={garten.id} value={garten.id}>
                  {garten.name}
                </option>
              );
            })}
            {/* <option value="-1">Все</option>
            <option value="1">Филиал 1</option>
            <option value="2">Филиал 2</option>
            <option value="3">Филиал 3</option> */}
          </select>
        </div>
      </div>

      {groupsLoading ? (
        <div> Загрузка групп </div>
      ) : (
        <>
          <h4>Список групп</h4>

          <div>
            {filterGroups.map((group) => (
              <Group data={group} key={group.id} />
            ))}

            <Link
              disabled={groupsLoading}
              to="/admin/addgroup"
              className="btn btn-add"
            >
              Добавить группу
            </Link>
          </div>
        </>
      )}
    </>
  );
}
