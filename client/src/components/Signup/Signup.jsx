import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Signup.module.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]{3,}$/;
    return nameRegex.test(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Validate name
    if (!validateName(name)) {
      setNameError(
        "Invalid name. Should only contain alphabets and have a minimum length of 3 characters"
      );
    }

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    }

    // Validate password strength
    if (!validatePasswordStrength(password)) {
      setPasswordError("Weak Password");
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match");
    }

    if (nameError || emailError || passwordError || confirmPasswordError) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success("User created successfully");
      } else {
        console.error("Signup failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className={styles.formSignup} onSubmit={handleSubmit}>
        <label className={styles.formLabels}>
          Name:
          <input
            className={styles.inputSignup}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={nameError}
          />
        </label>
        <label className={styles.formLabels}>
          Email:
          <input
            className={styles.inputSignup}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailError}
          />
        </label>
        <label className={styles.formLabels}>
          Password:
          <input
            className={styles.inputSignup}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={passwordError}
          />
        </label>
        <label className={styles.formLabels}>
          Confirm Password:
          <input
            type="password"
            className={styles.inputSignup}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={confirmPasswordError}
          />
        </label>
        <button className={styles.signupButton} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
