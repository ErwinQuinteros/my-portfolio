import './App.css';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen App ">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
