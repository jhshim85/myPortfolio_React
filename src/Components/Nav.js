import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faScrewdriverWrench, faPanorama, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Theme";
import { useContext } from "react";

const Nav = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <nav className={theme}>
      <ul className="menu__main">
        <li>
          <Link to="/" className="menu__main--list">
            <h4 className="menu__main--item">Home</h4>
            <FontAwesomeIcon icon={faHome} className="menu__main--icon" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="menu__main--list">
            <h4 className="menu__main--item">About</h4>
            <FontAwesomeIcon icon={faUser} className="menu__main--icon" />
          </Link>
        </li>
        <li>
          <Link to="/skills" className="menu__main--list">
            <h4 className="menu__main--item">Skill</h4>
            <FontAwesomeIcon icon={faScrewdriverWrench} className="menu__main--icon" />
          </Link>
        </li>
        <li>
          <Link to="/projects" className="menu__main--list">
            <h4 className="menu__main--item">Project</h4>
            <FontAwesomeIcon icon={faPanorama} className="menu__main--icon" />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="menu__main--list">
            <h4 className="menu__main--item">Contact</h4>
            <FontAwesomeIcon icon={faEnvelopeOpen} className="menu__main--icon" />
          </Link>
        </li>
      </ul>
      <div className="menu__slide">
        <p className="menu__slide--button" title="Click Me" tabIndex='0'>JS</p>
        <ul className="menu__slide--bar">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="menu__slide--icon"/>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faUser} className="menu__slide--icon"/>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="menu__slide--icon"/>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FontAwesomeIcon icon={faPanorama} className="menu__slide--icon"/>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="menu__slide--icon"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav