import React, { useState } from "react";
import Profile from "./Profile";
import Explorer from "./Explorer";

const Sidebar = () => {
  return (
    <nav className="shadow-md h-screen w-[16vw] p-2 bg-customGray font-Montserrat text-customWhite flex flex-col justify-between">
      <div className="profile_display p-3 w-full">
        <Profile/>

        <Explorer/>
      </div>

      <div className="logout w-fit text-lg flex m-3 p-2 pr-3 gap-2 cursor-pointer item-center font-Montserrat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>

        <span>Logout</span>
      </div>
    </nav>
  );
};

export default Sidebar;
