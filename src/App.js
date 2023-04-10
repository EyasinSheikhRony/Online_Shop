import React, {useState} from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

export default function App() {
  let [form, setForm] = useState("logina")

  return (
    <div>
      {form === "login" ? <Login /> : <Signup /> }
    </div>
  );
}
