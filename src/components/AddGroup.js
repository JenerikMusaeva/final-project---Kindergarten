import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewGroupAction } from "../store/actions/groups";

export default function AddGroup() {
  const [form, setForm] = useState({});
  let dispatch = useDispatch()

  let addGroupHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://kinder-garden-project.herokuapp.com/api/group/", request)
      .then((r) => r.json())
      .then((data) => {
        dispatch(addNewGroupAction(data));
      });
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  return (
    <>
      <h1>Добавление группы</h1>

      <form onSubmit={addGroupHandler}>
        <p>Выберите филиал</p>
        <div className="col-4">
          <select class="form-select" name="garten_id">
            <option value="1">Филиал 1</option>
            <option value="2">Филиал 2</option>
            <option value="3">Филиал 3</option>
          </select>
        </div>

        <div className="md-3 col-7">
          <label for="namegroup" className="form-label">
            Название группы
          </label>
          <input
            type="text"
            className="form-control"
            id="namegroup"
            name="namegroup"
            onChange={handleChange}
            value={form.namegroup}
          />
        </div>

        <div className="md-3 col-7">
          <label for="kindergartener" className="form-label">
            ФИО Воспитателя
          </label>
          <input
            type="text"
            className="form-control"
            id="kindergartener"
            name="kindergartener"
            onChange={handleChange}
            value={form.kindergartener}
          />
        </div>

        <div className="md-3 col-7">
          <label for="kindergartenerFoto" className="form-label">
            Фотография воспитателя
          </label>
          <input
            type="text"
            className="form-control"
            id="kindergartenerFoto"
            name="kindergartenerFoto"
            onChange={handleChange}
            value={form.kindergartenerFoto}
          />
        </div>

        <div className="md-3 col-7">
          <label for="groupInfo" className="form-label">
            Информация группы
          </label>
          <textarea
            rows="6"
            type="text"
            className="form-control"
            id="groupInfo"
            name="groupInfo"
            onChange={handleChange}
            value={form.groupInfo}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-primary">Добавить группу</button>
        </div>
      </form>
    </>
  );
}
