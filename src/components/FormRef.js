import React from "react";
import { useRef } from "react";

const FormRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    console.log(confirmPasswordRef.current.value);
  }

  return (
    <div>
      <form id="form-ref-link" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name: </label>
        <input ref={nameRef} type="text" id="full_name" />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input ref={emailRef} type="text" id="email" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input ref={passRef} type="password" id="password" />
        <br />
        <br />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input
          ref={confirmPasswordRef}
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

export default FormRef;
