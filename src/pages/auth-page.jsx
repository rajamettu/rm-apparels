import React from "react";

import "../styles/auth-page.scss";
import SignIn from "../components/signin";
import SignUp from "../components/signup";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
