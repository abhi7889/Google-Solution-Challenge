import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Signin.module.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signin", {
        email,
        password,
      });
      if (response.status === 200) {
        toast.success("User signed in successfully");
        navigate("/dashboard");
      } else {
        console.error("Signin failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during signin:", error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className={styles.formSignin} onSubmit={handleSubmit}>
        <label className={styles.formLabels}>
          Email:
          <input
            className={styles.inputbox}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className={styles.formLabels}>
          Password:
          <input
            className={styles.inputbox}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className={styles.signinBotton} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
