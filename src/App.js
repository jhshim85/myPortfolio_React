import { Route, Routes} from 'react-router-dom';
import Theme from './Components/Theme';
import Nav from "./Components/Nav";
import Home from "./Page/Home";
import About from './Page/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Theme />
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
