import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';


function App() {
  const intro = {
    title: "Say hello to ReactJS",
    description: "You will learn how to use the most popular frontend library, and become a super Ninja developer.",
    end: "Awesome!"
  }
  return (
    <div className="App">
      <LandingPage landing={intro}/>
    </div>
  );
}

export default App;
