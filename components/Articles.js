import Link from "./Link";

const List = ({ children }) => (
  <>
    <style jsx>{`
      padding-left: 0;
    `}</style>
    <ul>{children}</ul>
  </>
);

const Tag = ({ children }) => (
  <>
    <style jsx>{`
      a {
        font-size: 0.7em;
        background: #eee;
        border-radius: 1em;
        display: inline-block;
        margin-right: 1em;
        padding: 0.3em 1em;
        text-decoration: none;
        transition: ease-in-out 0.1s all;
      }
      a:hover {
        background: #0000ff;
        color: #fff;
        transform: translateY(-3px);
      }
    `}</style>
    <a href={`/tags/${children}`}>{children}</a>
  </>
);

const Article = ({ children, isActive, date, href, tags = [] }) => (
  <>
    <style jsx>{`
      li {
        margin-top: 1em;
        opacity: ${isActive ? 1 : 0.4};
      }
      div {
        margin-bottom: 0.3em;
      }
      a:hover {
        text-decoration: none;
      }
    `}</style>
    <li>
      <div>
        <span>{date} </span>
        <Link href={href}>{href}</Link>
      </div>
      {children}
      {/* {tags.map(tag => <Tag>{tag}</Tag>)} */}
    </li>
  </>
);

const articles = [
  {
    href: "/lazy-feature-enhancement",
    date: "2019-10-03",
    tags: ["react", "suspense", "javascript"]
  },
  {
    href: "/whoami",
    date: "2019-09-28"
  }
];

export default ({ activeHref, children }) => (
  <List>
    {articles.map(({ date, href, tags }) => (
      <Article
        isActive={activeHref === href}
        date={date}
        href={href}
        tags={tags}
        children={activeHref === href ? children : null}
      />
    ))}
  </List>
);
