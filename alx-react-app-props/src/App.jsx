import UserProfile from "./components/UserProfile";
import UserContext from "./context/UserContext";

function App() {
  const userData = {
    name: "Christian George",
    age: 25,
    bio: "Frontend Developer"
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;