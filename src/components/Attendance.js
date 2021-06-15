import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Attendance () {

  
    const [startDate, setStartDate] = useState(new Date());
  

  return(
    <>
    <div className="row">
        <div className="col-4">
        <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />

        </div>
        <div className="col-4">
          <select class="form-select col-1">
            <option value="1">Филиал 1</option>
            <option value="2">Филиал 2</option>
            <option value="3">Филиал 3</option>
          </select>
          <p>Выберите филиал</p>
        </div>
        <div className="col-4">
          <select class="form-select col-1">
            <option value="1">Группа 1</option>
            <option value="2">Группа 2</option>
            <option value="3">Группа 3</option>
          </select>
          <p>Выберите группу</p>
        </div>
      </div>
    <h4>Посещаемость</h4>

    

    </>
  )
}

