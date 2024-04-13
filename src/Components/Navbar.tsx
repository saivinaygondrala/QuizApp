import { signOut } from "firebase/auth";
import { auth } from "../firebase";
export default function Navbar() {
  const isLoggedIn = localStorage.getItem("login-token");
  return (
    <>
      <nav className="nav-container">
        <ul className="Nav-Ele-1">
          <li>
            <h1>Quiz App</h1>
          </li>
        </ul>
        <ul className="Nav-Ele">
          <li>
            <a href="#">Home</a>
          </li>
          {isLoggedIn && (
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          )}
          <li>
            <a href="#">About</a>
          </li>
          {!isLoggedIn && (
            <li>
              <a href="/signup">Signup</a>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <a href="/signin">Signin</a>
            </li>
          )}
          {isLoggedIn && (
            <li
              onClick={() => {
                signOut(auth);
                localStorage.clear();
                window.location.href = window.location.href;
              }}
            >
              Logout
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
