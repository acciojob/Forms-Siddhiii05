import React, { useState } from "react";

const FormState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(pass);
    console.log(confirmPass);
  }

  return (
    <div>
      <form id="form-state-link" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="full_name"
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
        />
        <br />
        <br />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          id="password_confirmation"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormState;
