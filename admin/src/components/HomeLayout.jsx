import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { backendUrl, currency } from "../App";

const HomeLayout = () => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Outlet context={{ token, backendUrl, currency }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default HomeLayout;
