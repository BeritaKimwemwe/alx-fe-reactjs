import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#f9fafb",
        textAlign: "center",
        padding: "15px 0",
        marginTop: "30px",
        boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.95rem" }}>© 2025 My React App</p>
    </footer>
  );
};

export default Footer;
