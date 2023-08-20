import { useEffect, useState } from "react";
import Client from "../util/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ErrorData from "../Components/ErrorData";
import LoaderAbout from "../Components/LoaderAbout";

const About = () => {

  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAbout = async () => {
      try {
        const res = await Client.getEntries({
          content_type: "about",
        });

        if (!!res) {
          const items =
            res?.items.map((item) => ({
              id: item?.sys?.id,
              title: item?.fields?.picture?.fields?.title,
              image: item?.fields?.picture?.fields?.file?.url,
              content: item?.fields?.aboutContent,
            })) || [];
          setAbout(items);
          setLoading(false);
        }
      } catch (error) {
        console.log(`Error fetching card content: ${error}`);
        setError(error);
        setLoading(false);
      }
    };
    getAbout();
  }, []);
  
  if (error) {
    return (
      <ErrorData />
    )
  }

  return (
    <main className="about">
      <div className="wrapper">
        <h1 className="section__heading">About <span>Me</span></h1>
        <h2 className="section__heading--bg">About</h2>
        {
          loading
          ?
          <LoaderAbout/>
          :
          about.map((item) => {
            return (
              <div className="about__container" key={item.id}>
                <div className="about__pic--container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="about__text--container">
                  {documentToReactComponents(item.content)}
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default About;