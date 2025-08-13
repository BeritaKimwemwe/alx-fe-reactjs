import React from "react";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: "#fdfdfd",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#1e40af", fontSize: "1.8rem", marginBottom: "10px" }}>
        {name}
      </h2>
      <p style={{ marginBottom: "6px" }}>
        Age: <span style={{ fontWeight: "bold" }}>{age}</span>
      </p>
      <p style={{ lineHeight: "1.5" }}>{bio}</p>
    </div>
  );
};

export default UserProfile;
