import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { fetchChildren } from "../../store/actions/children";
import { useDispatch, useSelector } from "react-redux";
import ChildVisit from "./ChildVisit";

import "react-datepicker/dist/react-datepicker.css";

export default function Attendance() {
  let dispatch = useDispatch();

  const {
    children: { loading: childrenLoading, value: children },
  } = useSelector((state) => state.children);

  let [filteredChildren, setFilteredChildren] = useState([]);

  useEffect(() => {
    dispatch(fetchChildren());
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="col-4">
          <select className="form-select col-1">
            <option value="1">Филиал 1</option>
            <option value="2">Филиал 2</option>
            <option value="3">Филиал 3</option>
          </select>
          <p>Выберите филиал</p>
        </div>
        <div className="col-4">
          <select className="form-select col-1">
            <option value="1">Группа 1</option>
            <option value="2">Группа 2</option>
            <option value="3">Группа 3</option>
          </select>
          <p>Выберите группу</p>
        </div>
      </div>
      <h4>Посещаемость</h4>

      {childrenLoading ? (
        <div> Загрузка воспитанников </div>
      ) : (
        <>
          <h4>Список воспитанников</h4>
          <div>
            {children.map((child) => (
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
