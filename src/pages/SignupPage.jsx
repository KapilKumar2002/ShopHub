import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={`max-w-[650px] mx-auto my-12 max-[650px]:mx-1`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-orange-500 text-center mb-10">
          Sign Up
        </h1>
        <form action="" className="flex flex-col gap-5">
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
            Sign up
          </button>
        </form>
        <p className="text-center">
          <span className="text-sm font-medium">
            Don't have any account?{" "}
            <Link to={"/auth/login"} className="font-semibold text-orange-500">
              Login
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
