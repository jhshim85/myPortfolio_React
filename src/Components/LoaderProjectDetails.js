import { FaLink, FaGithub } from "react-icons/fa6";

const LoaderProjectDetails = () => {
  
  return (
    <div className="project__container wrapper">
      <div className="project__title">
        <h1>Project Title</h1>
      </div>
      <div className="project__container--pic">
        <img
          src="https://eu.ui-avatars.com/api/?name=project&length=7&size=350&font-size=0.15"
          alt="project"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div className="project__container--text">
        <div className="project__links">
          <ul className="project__link--list">
            <li className="project__link--container">
              <p className="project__link--text">live website: </p>
              <FaLink className="project__link--icon" />
            </li>
            <li className="project__link--container">
              <p className="project__link--text">Github repo: </p>
              <FaGithub className="project__link--icon" />
            </li>
          </ul>
        </div>
        <div className="project__skill">
          <ul className="project__skill--list">
            <li>
              <div className="icon__container">
                <img
                  src="https://eu.ui-avatars.com/api/?name=skill&length=5&size=25&font-size=0.15&rounded=true"
                  alt="icon of skill"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </li>
            <li>
              <div className="icon__container">
                <img
                  src="https://eu.ui-avatars.com/api/?name=skill&length=5&size=25&font-size=0.15&rounded=true"
                  alt="icon of skill"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </li>
            <li>
              <div className="icon__container">
                <img
                  src="https://eu.ui-avatars.com/api/?name=skill&length=5&size=25&font-size=0.15&rounded=true"
                  alt="icon of skill"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </li>
            <li>
              <div className="icon__container">
                <img
                  src="https://eu.ui-avatars.com/api/?name=skill&length=5&size=25&font-size=0.15&rounded=true"
                  alt="icon of skill"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </li>
            <li>
              <div className="icon__container">
                <img
                  src="https://eu.ui-avatars.com/api/?name=skill&length=5&size=25&font-size=0.15&rounded=true"
                  alt="icon of skill"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="project__description">
          <p>Description of the project</p>
        </div>
      </div>
    </div>
  );
};

export default LoaderProjectDetails;
