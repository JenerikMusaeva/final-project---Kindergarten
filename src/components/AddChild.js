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

        <div className="row">
          <div className="md-3 col-6">
            <label for="surname" className="form-label">
              Фамилия
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              name="surname"
              onChange={handleChange}
              value={form.surname}
            />
          </div>

          <div className="md-3 col-6">
            <label for="name" className="form-label">
              Имя
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
              value={form.name}
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

        <div className="md-3 col-7">
          <label for="kindergartenerFoto" className="form-label">
            Фотография ребенка
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

        <h5>Родители</h5>

          <div className="md-3 col-10">
            <label for="nameMother" className="form-label">
              ФИО мамы
            </label>
            <input
              type="text"
              className="form-control"
              id="nameMother"
              name="nameMother"
              onChange={handleChange}
              value={form.nameMother}
            />
          </div>

          <div className="md-3 col-6">
            <label for="contactMother" className="form-label">
              Контакты мамы
            </label>
            <input
              type="text"
              className="form-control"
              id="contactMother"
              name="contactMother"
              onChange={handleChange}
              value={form.contactMother}
            />
          </div>

          <div className="md-3 col-10">
            <label for="nameMother" className="form-label">
              ФИО папы
            </label>
            <input
              type="text"
              className="form-control"
              id="nameMother"
              name="nameMother"
              onChange={handleChange}
              value={form.nameMother}
            />
          </div>

          <div className="md-3 col-6">
            <label for="contactFather" className="form-label">
              Контакты папы
            </label>
            <input
              type="text"
              className="form-control"
              id="contactFather"
              name="contactFather"
              onChange={handleChange}
              value={form.contactFather}
            />
          </div>

        <div className="mt-3">
          <button className="btn btn-primary">Добавить воспитанника</button>
        </div>
      </form>
    </>
  );
}
