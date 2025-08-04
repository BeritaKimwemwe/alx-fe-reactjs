// src/components/UserProfile.jsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 sm:p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <h2 className="text-xl sm:text-2xl font-semibold mt-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
          Berita Kimwemwe
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
          Frontend Developer | Passionate about clean UI and responsive design.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
