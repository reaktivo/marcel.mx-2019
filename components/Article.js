import Link from "./Link";
import Page from "./Page";
import Articles from "./Articles";

export default (props) => (
  <Page>
    <Articles activeHref={props.activeHref}>
      {props.children}
    </Articles>
  </Page>
);