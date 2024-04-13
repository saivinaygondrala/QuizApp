import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../styles/Signup.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("creds", userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="signup-container">
        <form onSubmit={signup}>
          <div className="signup-form">
            <h1>Sign Up</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Id"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
