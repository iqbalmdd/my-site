import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
    </>
  );
}

export default App;
