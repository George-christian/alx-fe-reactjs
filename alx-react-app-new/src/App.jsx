import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* Example usage of UserProfile */}
      <UserProfile 
        name="Christian George" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys cooking and traveling" 
      />

      <Footer />
    </div>
  );
}

export default App;