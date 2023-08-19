import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Client from "../util/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import ErrorData from "../Components/ErrorData";
import { DiHtml5, DiCss3, DiSass, DiJsBadge, DiFirebase } from "react-icons/di";
import { FaGear, FaReact, FaLink, FaGithub } from "react-icons/fa6";
import { SiFirebase, SiContentful, SiTypescript } from "react-icons/si";

const ProjectDetails = () => {

  const urlData = useParams();

  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await Client.getEntries({
          content_type: "projects",
          "fields.url": `${urlData.projectName}`,
        });
        
        if (!!res) {
          const item =
            res?.items.map((item) => ({
              id: item?.sys?.id,
              title: item?.fields?.title,
              image: item?.fields?.image?.fields?.file?.url,
              imageName: item?.fields?.image?.fields?.title,
              description: item?.fields?.description,
              url: item?.fields?.url,
              skills: item?.fields?.skills,
              liveWebsite: item?.fields?.liveWebsite,
              githubRepo: item?.fields?.githubRepo
            })) || [];
          setProject(item);
          setLoading(false);
        }
      } catch (error) {
        console.log(`Error fetching card content: ${error}`);
        setError(error);
        setLoading(false);
      }
    };
    getProject();
  }, []);

  const renderOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>
        );
      }
    }
  }
    
  if (error) {
    return <ErrorData />;
  }

  return (
    <main className="project">
      {project.map((item) => {
        return (
          <div className="project__container wrapper" key={item.id}>
            <div className="project__title">
              <h1>{item.title}</h1>
            </div>
            <div className="project__container--pic">
              <img src={item.image} alt={item.imageName} />
            </div>
            <div className="project__container--text">
              <div className="project__links">
                <ul className="project__link--list">
                  <li className="project__link--container">
                    <p className="project__link--text">live website: </p>
                    <a
                      href={item.liveWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="project__link--icon" />
                    </a>
                  </li>
                  <li className="project__link--container">
                    <p className="project__link--text">Github repo: </p>
                    <a
                      href={item.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="project__link--icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="project__skill">
                <ul className="project__skill--list">
                  {item.skills.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="icon__container">
                          {item === "HTML" ? (
                            <DiHtml5 title="HTML5" />
                          ) : item === "CSS" ? (
                            <DiCss3 title="CSS3" />
                          ) : item === "SASS" ? (
                            <DiSass title="SCSS" />
                          ) : item === "JavaScript" ? (
                            <DiJsBadge title="JavaScript" />
                          ) : item === "Firebase" ? (
                            <SiFirebase title="Firebase" />
                          ) : item === "Firestore" ? (
                            <DiFirebase title="Firestore" />
                          ) : item === "API" ? (
                            <FaGear title="RESTful APIs" />
                          ) : item === "React" ? (
                            <FaReact title="React" />
                          ) : item === "Contentful" ? (
                            <SiContentful title="Contentful" />
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="project__description">
                {documentToReactComponents(item.description, renderOptions)}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default ProjectDetails