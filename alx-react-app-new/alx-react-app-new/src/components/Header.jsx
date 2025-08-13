import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#1e3a8a",
        color: "#ffffff",
        textAlign: "center",
        padding: "25px 0",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", margin: 0 }}>My Favorite Cities</h1>
    </header>
  );
};

export default Header;
