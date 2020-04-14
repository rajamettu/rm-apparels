import React from "react";

import "../styles/authpage.scss";
import SignIn from "../components/signin";

const AuthPage = () => {
  return (
    <div className="authpage">
      <SignIn />
    </div>
  );
};

export default AuthPage;
