import Skill from "./components/Skill";
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
      <Skill />
      <Projects />
      <Education />
      <Contact />
    </div>
    </>
  );
}

export default App;
