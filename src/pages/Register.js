import { useState } from "react";

export default function Register() {
  let [regForm, setRegForm] = useState({});

  let handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  };

  let registerHandler = (e) => {
    e.preventDefault();

    let reguest = {
      method: "POST",
      body: JSON.stringify(regForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:1717/signin", reguest)
      .then((r) => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("x_token", data.token);
          window.location.href = "/";
        } 
      });
  };

  return (
    <>
      <div className="">
        <h4>Register</h4>
        <form onSubmit={registerHandler}>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={regForm.userName}
            name="username"
            onChange={handleChange}
          />
          <input
            type="text"
            id="firstName"
            placeholder="firstName"
            value={regForm.firstname}
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            id="age"
            placeholder="age"
            value={regForm.age}
            name="age"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={regForm.password}
            name="password"
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
