import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { register } from "../store/actions/auth";
import { BASE_URL } from "../store/constants/url";
// import { useHistory } from "react-router-dom";

export default function Register() {
  let [regForm, setRegForm] = useState({});
  // let dispatch = useDispatch();
  // let history = useHistory();

  let handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  };

  let registerHandler = (e) => {
    e.preventDefault();

    if (!regForm.fullName || regForm.fullName === "") {
      alert("Укажите имя");
      return false;
    }

    if (!regForm.username || regForm.username === "") {
      alert("Не указан логин");
      return false;
    }

    if (!regForm.password || regForm.password === "" || regForm.password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов");
      return false;
    }

    let reguest = {
      method: "POST",
      body: JSON.stringify(regForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_URL}/users/sign-up-model`, reguest)
      .then((r) => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("x_token", data.token);
          window.location.href = "/";
          // history.push("/");
        }
        alert("Регистрация прошла удачно!")
        setRegForm({
          fullName: '',
          userName: '',
          password: '',
        })
      })
      .catch((error) => {
      });
  };

  // let registerHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(register(regForm))
  // };

  return (
    <>
      <div className="register-form">
        <h4>Регистрация</h4>
        <form onSubmit={registerHandler}>
          <label htmlFor="fullName" className="form-label">
            Ваше имя
          </label>
          <input
            className="form-control"
            type="text"
            id="fullName"
            value={regForm.fullName}
            name="fullName"
            onChange={handleChange}
          />
          <label htmlFor="username" className="form-label">
            Логин
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={regForm.userName}
            name="username"
            onChange={handleChange}
          />
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={regForm.password}
            name="password"
            onChange={handleChange}
          />

          <button className="mt-3 btn btn-add" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}
