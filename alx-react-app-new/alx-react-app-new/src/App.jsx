import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  const users = [
    { name: "Alice Johnson", age: 28, bio: "Loves traveling and exploring new cities." },
    { name: "Bob Smith", age: 34, bio: "Enjoys photography and cultural experiences." },
    { name: "Clara Williams", age: 25, bio: "Foodie and passionate about cooking." },
  ];

  return (
    <div>
      <Header />
      {users.map((user, index) => (
        <UserProfile
          key={index}
          name={user.name}
          age={user.age}
          bio={user.bio}
        />
      ))}
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
