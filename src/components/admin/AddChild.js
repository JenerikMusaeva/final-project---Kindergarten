import { useState } from "react";

export default function AddChild() {
  const [form, setForm] = useState({});

  let addChildHandler = (e) => {
    e.preventDefault();
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
      <h1>Добавление воспитанника</h1>

      <form onSubmit={addChildHandler}>
        <div className="row">
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

        <div className="row">
          <div className="md-3 col-12">
            <label for="fullName" className="form-label">
              Фамилия Имя воспитанника
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              value={form.fullName}
            />
          </div>
        </div>

        <div className="md-3 col-7">
          <label for="patronymic" className="form-label">
            Дата рождения
          </label>
          <input
            type="text"
            className="form-control"
            id="patronymic"
            name="patronymic"
            onChange={handleChange}
            value={form.patronymic}
          />
        </div>

        <div className="md-3 mt-3 mb-3 col-7">
          <label for="genderMale">муж.</label>
          <input
            type="radio"
            checked
            id="genderMale"
            name="gender"
            value="Мальчик"
          />

          <label for="genderFemale">жен.</label>
          <input type="radio" id="genderFemale" name="gender" value="Девочка" />
        </div>

        <h5>Родитель</h5>

        <div className="md-3 col-10">
          <label for="parent" className="form-label">
            ФИО родителя
          </label>
          <input
            type="text"
            className="form-control"
            id="parent"
            name="parent"
            onChange={handleChange}
            value={form.parent}
          />
        </div>

        <div className="md-3 col-6">
          <label for="contact" className="form-label">
            Контакты родителя
          </label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            onChange={handleChange}
            value={form.contact}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-primary">Добавить воспитанника</button>
        </div>
      </form>
    </>
  );
}
