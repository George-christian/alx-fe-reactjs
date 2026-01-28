import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Christian George" age={25} bio="A React enthusiast" />
      <Counter />
      <Footer />
    </>
  );
}

export default App;