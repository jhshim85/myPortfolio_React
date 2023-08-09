import { Route, Routes} from 'react-router-dom';
import Theme from './Components/Theme';
import Nav from "./Components/Nav";
import Home from "./Page/Home";
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Contact from './Page/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Theme />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
