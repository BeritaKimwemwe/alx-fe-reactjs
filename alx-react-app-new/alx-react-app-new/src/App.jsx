import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  const users = [
    { name: "Alice", age: 25, bio: "Loves hiking and photography" }
  ];

  return (
    <div>
      <Header />
      <MainContent />
      {users.map((user, index) => (
        <UserProfile
          key={index}
          name={user.name}
          age={user.age}
          bio={user.bio}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
