import React from "react";
import { useAuthState } from "../../hooks/useAuthState";

function SignIn() {
  const [isAuth, toggleAuth] = useAuthState();
  return (
    <>
      <input
        checked={isAuth}
        id="authentication-input"
        type="checkbox"
        onChange={toggleAuth}
      />
      <label htmlFor="authentication-input">I am authenticated </label>
    </>
  );
}

export default SignIn;
