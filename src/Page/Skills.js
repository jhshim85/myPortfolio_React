import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiJqueryLogo,
  DiFirebase
} from "react-icons/di";
import {
  FaGear,
  FaReact,
  FaGithub,
  FaTerminal,
  FaLaptopCode,
  FaUniversalAccess,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiFirebase,
  SiContentful,
  SiBitly,
  SiJirasoftware,
  SiBootstrap,
  SiTypescript,
  SiPython,
  SiGooglecloud,
  SiAmazonaws,
  SiWoocommerce,
} from "react-icons/si";

const Skills = () => {
  
  return (
    <main className="skills">
      <div className="wrapper">
        <h1 className="section__heading">
          My <span>Skills</span>
        </h1>
        <h2 className="section__heading--bg">Skills</h2>
        <div className="skills__container">
          <div className="skills__container--tech">
            <ul className="skills__list--tech">
              <li>
                <div className="icon__container">
                  <DiHtml5 />
                </div>
                <p>HTML5</p>
              </li>
              <li>
                <div className="icon__container">
                  <DiCss3 />
                </div>
                <p>CSS3</p>
              </li>
              <li>
                <div className="icon__container">
                  <DiSass />
                </div>
                <p>SCSS</p>
              </li>
              <li>
                <div className="icon__container">
                  <DiJsBadge />
                </div>
                <p>JavaScript</p>
              </li>
              <li>
                <div className="icon__container">
                  <DiJqueryLogo />
                </div>
                <p>jQuery</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaGear />
                </div>
                <p>RESTful APIs</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiFirebase />
                </div>
                <p>Firebase</p>
              </li>
              <li>
                <div className="icon__container">
                  <DiFirebase />
                </div>
                <p>Firestore</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaReact />
                </div>
                <p>React</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaGithub />
                </div>
                <p>Github/Git</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaTerminal />
                </div>
                <p>Terminal</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaLaptopCode />
                </div>
                <p>Responsive Design</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaUniversalAccess />
                </div>
                <p>Accessibility</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiContentful />
                </div>
                <p>Contentful</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiBitly />
                </div>
                <p>Braze</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiJirasoftware />
                </div>
                <p>Jira</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiBootstrap />
                </div>
                <p>Bootstrap</p>
              </li>
              <li>
                <div className="icon__container">
                  <FaWordpress />
                </div>
                <p>WordPress</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiGooglecloud />
                </div>
                <p>Google Cloud</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiAmazonaws />
                </div>
                <p>AWS</p>
              </li>
              <li>
                <div className="icon__container">
                  <SiWoocommerce />
                </div>
                <p>Woocommerce</p>
              </li>
              <li className="upcoming__skill">
                <div className="icon__container">
                  <SiTypescript className="upcoming__skill--icon" />
                </div>
                <p className="upcoming__skill--type">Typescript</p>
                <div className="upcoming__skill--text">
                  <p>installing...</p>
                </div>
              </li>
              <li className="upcoming__skill">
                <div className="icon__container">
                  <SiPython className="upcoming__skill--icon" />
                </div>
                <p className="upcoming__skill--type">Python</p>
                <div className="upcoming__skill--text">
                  <p>installing...</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills