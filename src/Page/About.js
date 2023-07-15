const About = () => {
  return (
    <section class="about">
      <span id="about" class="sr-only link">Link to About</span>
      <div class="wrapper">
        <h2 class="section__heading">About <span>Me</span></h2>
        <span class="section__heading--bg">About</span>
        <div class="about__container">
          <div class="about__pic--container">
            <img src="./assets/portfolio_pic.jpg" alt="my picture"/>
          </div>
          {/* <div class="about__pic--bg"></div> */}
          <div class="about__text--container">
            <h3 class="about__text--title"><em>Creative, Challenge, Curious, Innovative, Simple</em></h3>
            <p class="about__text--content">As an enthusiastic front-end developer, I love any opportunity to be <em>Creative</em> and enjoy <em>Challenge</em>. I am always <em>Curious</em> of how things work and never afraid to ask why. I am extremely passionate about furthering my skills and building <em>Innovative</em> and <em>Simple</em> solutions in a collaborative and supportive environment.</p>
            <p class="about__text--content"> My goal as a developer is to be the bridge between design and technology that can turn an idea into an interactive app that is visually-pleasing, yet functional and accessible technology for every person in the world.</p>
            <p class="about__text--content">When I am free, I love exploring good food around town, building lego blocks, learning new recipes, playing sports and watching movies.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;