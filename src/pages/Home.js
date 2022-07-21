import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Projects from "./Projects";

const Home = () => {
  const { language, setLanguage, writeBilingualContent } = useGlobalContext();
  console.log(language);
  return (
    <section>
      <h1>
        {writeBilingualContent(
          "hey, my name is MattFR, check out my projects",
          "hey je m'appelle matt, regarde mes projets"
        )}
      </h1>
      <Link to="/projects">
        {writeBilingualContent("View Projects", "Voir mes projets")}
      </Link>
      <section>
        <form
          method="post"
          name="contact v1"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div>
            <label htmlFor="first-name">
              First name
              <input type="text" name="first-name" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="">
              any Comments?
              <textarea name="comments"></textarea>
            </label>
          </div>
          <button type="submit">Submit the result</button>
        </form>
      </section>
    </section>
  );
};

export default Home;
