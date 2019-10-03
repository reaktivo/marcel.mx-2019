export default ({ children }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Cousine:400,400i,700,700i&display=swap"
        rel="stylesheet"
      />
      <style jsx global>
        {`
          body {
            color: #666;
            font-family: Cousine, sans-serif;
          }
          header {
            margin: 0 0 4em;
          }
          h1 {
            font-size: 16px;
          }
        `}
      </style>
      <header>
        <h1>
          Thoughts and ideas by{" "}
          <a href="https://www.twitter.com/reaktivo">Marcel Miranda</a>
        </h1>
      </header>
      {children}
    </>
  );
};
