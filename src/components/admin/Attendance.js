import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { fetchChildren } from "../../store/actions/children";
import { fetchGartens } from "../../store/actions/gartens";
import { fetchGroups } from "../../store/actions/groups";
import { useDispatch, useSelector } from "react-redux";
import ChildVisit from "./ChildVisit";

import "react-datepicker/dist/react-datepicker.css";

export default function Attendance() {
  let dispatch = useDispatch();

  const { loading } = useSelector((state) => state.appstate);
  const { children } = useSelector((state) => state.children);
  const { groups } = useSelector((state) => state.groups);
  const { gartens } = useSelector((state) => state.gartens);
  const [selectedGarten, setSelectedGarten] = useState("-1");
  const [selectedGroup, setSelectedGroup] = useState("-1");
  const [selectedGroupArray, setSelectedGroupArray] = useState([]);
  let [filteredChildren, setFilteredChildren] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
    dispatch(fetchChildren());
  }, []);

  useEffect(() => {
    setFilteredChildren(
      children
        .filter((child) => {
          if (selectedGarten === "-1") return true;
          return Number(child.group.kinderGarden.id) === Number(selectedGarten);
        })
        .filter((child) => {
          if (selectedGroup === "-1") return true;
          return Number(child.group.id) === Number(selectedGroup);
        })
    );
  }, [children, selectedGarten, selectedGroup]);

  useEffect(() => {
    setSelectedGroupArray(() => {
      if (selectedGarten === "-1") return groups;
      return groups.filter((g) => g.kinderGarden.id === Number(selectedGarten));
    });
  }, [selectedGarten]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeGarten = (e) => {
    setSelectedGarten(e.target.value);
  };

  const handleChangeGroup = (e) => {
    setSelectedGroup(e.target.value);
  };

  return (
    <>
      <h4>Посещаемость</h4>
      <div className="row">
        <div className="col-4">
          <p>Укажите дату</p>
          <DatePicker
            filterDate={isWeekday}
            className="col-12"
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
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
            {!filteredChildren.length && (
              <div className="alert alert-danger">Список пуст!</div>
            )}
            {filteredChildren.map((child) => (
              <ChildVisit data={child} key={child.id} />
            ))}
            <button onClick={handleSubmit} className="btn btn-add">
              Отметить посещаемость
            </button>
          </div>
        </>
      )}
    </>
  );
}
