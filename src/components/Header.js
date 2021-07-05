import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/actions/auth";
import { BASE_URL } from "../store/constants/url";
import { LOGIN_SUCCESS } from "../store/actions/types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Header() {
  let dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let [loginForm, setLoginForm] = useState({});
  let { logined, userData } = useSelector((state) => state.auth);

  let handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  let loginHandler = (e) => {
    console.log('submit')
    e.preventDefault();
    let reguest = {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_URL}/users/sign-in`, reguest)
      .then((r) => {
        if (r.ok) return r.json();
        throw new Error("Не правильные данные входа");
      })
      .then((data) => {
        dispatch({ type: LOGIN_SUCCESS })
        localStorage.setItem("x_token", data);
          alert("Вы зашли как администратор!");
        // console.log("DATA", data);
        // if (data === "wrong login or password") {
        //   alert("Invalid password");
          // } else if (typeof data === "object") {
          //   alert("Invalid login or passs");
        // } else {
        //   localStorage.setItem("x_token", data.token);
        //   dispatch({ type: LOGIN_SUCCESS });
          // alert("Вы зашли как администратор!");
        // }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
          <div>
            {logined ? (
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="user-menu" caret>
                  Админ
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/admin/attendance">
                    <DropdownItem>Посещаемость</DropdownItem>
                  </Link>
                  <Link className="header-menu-link" to="/admin/report">
                    <DropdownItem>Отчет</DropdownItem>
                  </Link>
                  <Link to="/admin/groups">
                    <DropdownItem>Группы</DropdownItem>
                  </Link>
                  <Link to="/admin/children">
                    <DropdownItem>Воспитанники</DropdownItem>
                  </Link>
                  <DropdownItem onClick={() => dispatch(logOut())}>
                    Выход
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <button onClick={toggleModal} className="btn btn-login">
                Вход
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggleModal={toggleModal}>Вход в систему</ModalHeader>
        <ModalBody>
          <form onSubmit={loginHandler}>
            <label htmlFor="username" className="form-label">
              Логин
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              value={loginForm.username}
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
              value={loginForm.password}
              name="password"
              onChange={handleChange}
            />
            <div className="end">
              <button
                onClick={toggleModal}
                className="btn btn-add mt-3"
                type="submit"
              >
                Вход
              </button>
              <button
                className="btn btn-secondary ms-3 mt-3"
                onClick={toggleModal}
                type="button"
              >
                Отмена
              </button>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Link onClick={toggleModal} to="/register">
            Регистрация
          </Link>
        </ModalFooter>
      </Modal>
    </>
  );
}
