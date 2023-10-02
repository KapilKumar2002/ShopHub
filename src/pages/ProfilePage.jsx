import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const ProfilePage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  return (
      <div className="bg-orange-500 rounded-lg p-10 flex flex-col items-center gap-5 w-96 h-96 my-10 justify-center mx-auto">
        <h1 className="text-white font-bold">Username: {userInfo.username}</h1>
        <h2 className="text-white font-semibold">id: {userInfo.id}</h2>
        <Link
          onClick={logout}
          to={"/"}
          className="text-white font-semibold bg-orange-200 px-5 py-2 rounded-lg"
        >
          Logout
        </Link>
      </div>
  );
};

export default ProfilePage;
