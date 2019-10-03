import Article from '../components/Article';

export default (props) => (
  <Article activeHref={props.url.pathname}>
    Lazy feature enhancement
  </Article>
);