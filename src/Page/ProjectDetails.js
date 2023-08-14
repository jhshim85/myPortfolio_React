import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Client from "../util/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DiHtml5, DiCss3, DiSass, DiJsBadge, DiFirebase } from "react-icons/di";
import { FaGear, FaReact, FaGithub } from "react-icons/fa6";
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

  return (
    <main className="page__theme--dark">
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
                {documentToReactComponents(item.description)}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default ProjectDetails