import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";


const LoginPage = () => {
 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className={`max-w-[650px] mx-auto my-12 max-[650px]:mx-1`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-orange-500 text-center mb-10">
          Login
        </h1>
        <form action="" className="flex flex-col gap-5" onSubmit={login}>
          <input
            required={true}
            type="text"
            placeholder="Username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          required={true}
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-2 bg-orange-500 rounded-lg text-white font-semibold shadow-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          <span className="text-sm font-medium">
            Don't have any account?{" "}
            <Link to={"/auth/signup"} className="font-semibold text-orange-500">
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;

/* <GoogleOAuthProvider clientId="911969724281-vaai2vlk1acs2aarntt8mnlbgirb3h0c.apps.googleusercontent.com">

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const details = jwtdecode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
        
      </GoogleOAuthProvider> */
