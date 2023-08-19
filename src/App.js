import { Route, Routes} from 'react-router-dom';
import ThemeProvider from './Components/ThemeProvider';
import ScrollToTop from './Components/ScrollToTop';
import Theme from './Components/Theme';
import Home from "./Page/Home";
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import ProjectDetails from './Page/ProjectDetails';
import Contact from './Page/Contact';
import ErrorPage from './Page/ErrorPage';
import Footer from './Components/Footer';

function App() {
  
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Theme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectName" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
