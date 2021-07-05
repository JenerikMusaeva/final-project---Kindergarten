import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGroupAction } from "../../store/actions/groups";
import { fetchGartens } from "../../store/actions/gartens";
import { BASE_URL } from "../../store/constants/url";
import { fetchEnd } from "../../store/actions/appstate";
import { setGroups } from "../../store/actions/groups";

export default function AddGroup() {
  const [form, setForm] = useState({
    kinderGardenId: "",
    name: "",
    teacherFullName: "",
    imageId: "8",
    info: "",
  });

  let dispatch = useDispatch();

  const { gartens } = useSelector((state) => state.gartens);
  // const { groups } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGartens());
  }, []);

  let addGroupHandler = (e) => {
    e.preventDefault();

    if (!form.kinderGardenId || form.kinderGardenId === "") {
      alert("Не выбран филиал садика");
      return false;
    }

    if (!form.name || form.name === "") {
      alert("Не указано название группы");
      return false;
    }

    if (!form.teacherFullName || form.teacherFullName === "") {
      alert("Поле воспитатель обязательно");
      return false;
    }

    if (!form.imageId || form.imageId === "") {
      alert("Картинка пуста");
      return false;
    }

    let request = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_URL}/group/`, request)
      .then((r) => r.json())
      .then((data) => {
        dispatch(addGroupAction(data));
        setForm({
          kinderGardenId: "",
          name: "",
          teacherFullName: "",
          imageId: "2",
          info: "",
        });
        dispatch(fetchEnd());
        alert("Группа успешно добавлена!");
      })
      .catch((error) => {
        error("ERROR!!!");
        dispatch(fetchEnd());
      });

    //
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Добавление группы</h1>

      <form onSubmit={addGroupHandler}>
        <p>Выберите филиал</p>
        <div className="col-12 col-md-4">
          <select
            onChange={handleChange}
            className="form-select"
            name="kinderGardenId"
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

        <div className="md-3 col-12 col-md-7">
          <label htmlFor="name" className="form-label">
            Название группы
          </label>
          <input
            valid
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={form.namegroup}
          />
        </div>

        <div className="md-3 col-12 col-md-7">
          <label htmlFor="teacherFullName" className="form-label">
            ФИО Воспитателя
          </label>
          <input
            type="text"
            className="form-control"
            id="teacherFullName"
            name="teacherFullName"
            onChange={handleChange}
            value={form.teacherFullName}
          />
        </div>

        <div className="md-3 col-12 col-md-7">
          <label htmlFor="info" className="form-label">
            Информация группы
          </label>
          <textarea
            rows="6"
            type="text"
            className="form-control"
            id="info"
            name="info"
            onChange={handleChange}
            value={form.info}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-add">Добавить группу</button>
        </div>
      </form>
    </>
  );
}
