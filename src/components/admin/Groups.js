import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "./Group";
import { fetchGroups } from "../../store/actions/groups";
import { fetchGartens } from "../../store/actions/gartens";

export default function Groups() {
  let dispatch = useDispatch();

  const { loading } = useSelector((state) => state.appstate);

  const {
    groups: { value: groups },
  } = useSelector((state) => state.groups);

  const {
    gartens: { value: gartens, error },
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
          </select>
        </div>
      </div>

      {loading ? (
        <div> Загрузка групп </div>
      ) : (
        <>
          <h4>Список групп</h4>

          <div>
          {error && <div className="alert alert-danger">Error!</div>}
          {!filterGroups.length && <div className="alert alert-danger">Список пуст!</div>}
            {filterGroups.map((group) => (
              <Group data={group} key={group.id} />
            ))}

            <Link
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
