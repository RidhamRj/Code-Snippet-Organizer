import React from "react";

function Profile() {
  return (
    <div className="flex justify-start items-center gap-5 w-full">
      <div className="">
        <img
          className="rounded-lg"
          src="src/assets/Profile.jpg"
          alt="profile picture"
        />
      </div>

      <div className="">
        <p className="text-xl">Profile box</p>
        <p className="text-xs">example@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
