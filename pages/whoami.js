import { useRouter } from "next/router";
import Article from "../components/Article";

export default props => {
  return (
    <>
      <Article activeHref={props.url.pathname}>
        <style jsx>{`
          div {
            padding-left: 2em;
            max-width: 30em;
          }
        `}</style>
        <div>
          <p>
            My name is Marcel Miranda and I'm a web enthusiast based in
            Amsterdam, NL. Mostly interested in modern and old-school web
            technologies, the decentralized web, digital privacy and the like.
          </p>
          <p>
            I'm currently working at Ace & Tate and **not** looking for a job
          </p>
          <p>
            You can find me at{" "}
            <a href="https://www.github.com/reaktivo">Github</a> and{" "}
            <a href="https://www.twitter.com/reaktivo">Twitter</a>.
          </p>
          <p>
            <i>Se habla español</i>
          </p>
        </div>
      </Article>
    </>
  );
};
