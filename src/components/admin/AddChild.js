import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChildAction } from "../../store/actions/children";
import { fetchGartens } from "../../store/actions/gartens";
import { fetchGroups } from "../../store/actions/groups";
import { BASE_URL } from "../../store/constants/url";
import DatePicker from "react-datepicker";

export default function AddChild() {
  const [form, setForm] = useState({
    groupId: "",
    fullName: "",
    imageId: "1",
    birthDay: "",
    gender: "Мальчик",
    parent: "",
    contact: "",
  });

  let dispatch = useDispatch();

  const { loading } = useSelector((state) => state.appstate);

  const [date, setDate] = useState(new Date());

  function convertDate(date) {
    if (!date) {
      return "";
    }
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  }

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
  }, []);

  const { groups } = useSelector((state) => state.groups);

  const { gartens } = useSelector((state) => state.gartens);

  const [selectedGarten, setSelectedGarten] = useState(-1);
  const [selectedGroup, setSelectedGroup] = useState(groups);

  useEffect(() => {
    setSelectedGroup(() => {
      if (Number(selectedGarten) === -1) {
        return groups;
      }
      return groups.filter(
        (group) => Number(group.kinderGarden.id) === Number(selectedGarten)
      );
    });
  }, [selectedGarten, groups.length]);

  let addChildHandler = (e) => {
    e.preventDefault();

    if (!form.groupId || form.groupId === "") {
      alert("Не выбрана группа");
      return false;
    }

    if (!form.fullName || form.fullName === "") {
      alert("Не указано имя воспитанника");
      return false;
    }

    if (!date) {
      alert("Не указана дата рождения");
      return false;
    }

    if (!form.imageId || form.imageId === "") {
      alert("Картинка пуста");
      return false;
    }

    if (!form.parent || form.parent === "") {
      alert("Не указано имя родителя");
      return false;
    }

    if (!form.contact || form.contact === "") {
      alert("Укажите контактный номер родителя");
      return false;
    }

    let request = {
      method: "POST",
      body: JSON.stringify({ ...form, birthDay: convertDate(date) }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_URL}/childs/`, request)
      .then((r) => r.json())
      .then((data) => {
        dispatch(addChildAction(data));
        setForm({
          groupId: "",
          fullName: "",
          imageId: "1",
          birthDay: "",
          gender: "Девочка",
          parent: "",
          contact: "",
        });
        setDate(new Date());
        alert("Воспитанник успешно добавлен!");
      })
      .catch((error) => {
        // error('ERROR!!!');
      });
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Добавление воспитанника</h1>

      <form onSubmit={addChildHandler}>
        <div className="row">
          <div className="col-4">
            <p>Выберите филиал</p>
            <select
              onChange={(event) => setSelectedGarten(event.target.value)}
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
              disabled={loading}
              onChange={handleChange}
              className="form-select col-1"
              name="groupId"
            >
              <option value="-1">Все</option>
              {selectedGroup.map((group) => {
                return (
                  <option value={group.id} key={group.id}>
                    {group.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="md-3 col-10">
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
          <p for="patronymic" className="form-label">
            Дата рождения
          </p>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>

        <div className="md-3 mt-3 mb-3 col-7">
          <label for="genderMale">муж.</label>
          <input
            checked={form.gender === "Мальчик"}
            onChange={handleChange}
            type="radio"
            id="genderMale"
            name="gender"
            value="Мальчик"
          />
          <label for="genderFemale">жен.</label>
          <input
            checked={form.gender === "Девочка"}
            type="radio"
            onChange={handleChange}
            id="genderFemale"
            name="gender"
            value="Девочка"
          />
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
          <button className="btn btn-add">Добавить воспитанника</button>
        </div>
      </form>
    </>
  );
}
