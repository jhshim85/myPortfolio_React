import { useEffect, useState } from "react";
import Client from "../util/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ErrorData from "../Components/ErrorData";

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
        {/* <div className="about__container">
          <div className="about__pic--container">
          </div>
          <div className="about__text--container">
            <h3 className="about__text--title"><em>Creative, Challenge, Curious, Innovative, Simple</em></h3>
            <p className="about__text--content">As an enthusiastic front-end developer, I love any opportunity to be <em>Creative</em> and enjoy <em>Challenge</em>. I am always <em>Curious</em> of how things work and never afraid to ask why. I am extremely passionate about furthering my skills and building <em>Innovative</em> and <em>Simple</em> solutions in a collaborative and supportive environment.</p>
            <p className="about__text--content"> My goal as a developer is to be the bridge between design and technology that can turn an idea into an interactive app that is visually-pleasing, yet functional and accessible technology for every person in the world.</p>
            <p className="about__text--content">When I am free, I love exploring good food around town, building lego blocks, learning new recipes, playing sports and watching movies.</p>
          </div>
        </div> */}
      </div>
    </main>
  )
}

export default About;