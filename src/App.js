import './App.css';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SlideBar from './components/SlideBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SlideBar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
