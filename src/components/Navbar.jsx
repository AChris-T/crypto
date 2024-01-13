/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Images/up.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-20" />
      </NavLink>
      <div className="flex  lg:gap-4">
        <NavLink to="/about">
          {({ isActive }) => (
            <>
              <span
                className={`flex text-base font-normal ${
                  isActive
                    ? "text-white  bg-slate-500 font-semibold px-4 py-1 rounded-sm"
                    : "text-grey-1000 px-4 py-1 rounded-sm font-normal hover:bg-slate-600"
                } text-white px-4 py-1 rounded-sm`}
              >
                About
              </span>
            </>
          )}
        </NavLink>
        <NavLink to="/collaboration">
          {({ isActive }) => (
            <>
              <span
                className={`flex text-base font-normal ${
                  isActive
                    ? "text-white  bg-slate-500 font-semibold px-4 py-1 rounded-sm"
                    : "text-grey-1000 px-4 py-1 rounded-sm font-normal hover:bg-slate-600"
                } text-white px-4 py-1 rounded-sm`}
              >
                Collaboration
              </span>
            </>
          )}
        </NavLink>
        <NavLink to="/founder">
          {({ isActive }) => (
            <>
              <span
                className={`flex text-base font-normal ${
                  isActive
                    ? "text-white  bg-slate-500 font-semibold px-4 py-1 rounded-sm"
                    : "text-grey-1000 px-4 py-1 rounded-sm font-normal hover:bg-slate-600"
                } text-white px-4 py-1 rounded-sm`}
              >
              Founder
              </span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
