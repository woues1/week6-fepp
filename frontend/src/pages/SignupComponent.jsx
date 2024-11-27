import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const { Signup, pending } = useSignup()

  const handleSignup = async () => {
    if (password == password2){
      await Signup(email, password, setIsAuthenticated)
      navigate("/");
    } else {
      console.log("Passwords do not match")
    }
  }

  // const handleSignup = async () => {
  //   try {
  //     const response = await fetch("/api/users/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       const user = await response.json();
  //       localStorage.setItem("user", JSON.stringify(user));
  //       console.log("User signed up successfully!");
  //       setIsAuthenticated(true);
  //       navigate("/");
  //     } else {
  //       console.error("Signup failed", response);
  //     }
  //   } catch (error) {
  //     console.error("Error during signup:", error);
  //   }
  // };


  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Password2:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
