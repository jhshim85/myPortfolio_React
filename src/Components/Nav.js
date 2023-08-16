import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faScrewdriverWrench, faPanorama, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {

  const [clicked, setClicked] = useState("menu__slide--bar");
  const menuClicked = () => {
    setClicked((current) =>
      current === "menu__slide--bar"
        ? "menu__slide--clicked"
        : "menu__slide--bar"
    );
  };
  const handler = (e) => {
    return e.key === "Enter" ? menuClicked() : null;
  };

  return (
    <div className="menu__container">
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
            <h4 className="menu__main--item">Skills</h4>
            <FontAwesomeIcon icon={faScrewdriverWrench} className="menu__main--icon" />
          </Link>
        </li>
        <li>
          <Link to="/projects" className="menu__main--list">
            <h4 className="menu__main--item">Projects</h4>
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
        <p className="menu__slide--button" type="button" title="Click Me" tabIndex='0' onClick={menuClicked} onKeyDown={handler}>JS</p>
        <ul className={clicked}>
          <li>
            <Link to="/" className="menu__slide--list">
              <FontAwesomeIcon icon={faHome} className="menu__slide--icon" title="Home"/>
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu__slide--list">
              <FontAwesomeIcon icon={faUser} className="menu__slide--icon" title="About"/>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="menu__slide--list">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="menu__slide--icon" title="Skills"/>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="menu__slide--list">
              <FontAwesomeIcon icon={faPanorama} className="menu__slide--icon" title="Projects"/>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu__slide--list">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="menu__slide--icon" title="Contact"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav