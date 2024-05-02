import React from "react";

const Error = ({ statusCode = 404 }: { statusCode: number }) => (
  <article className="error">
    <div>
      <h1 className="title error-code">{statusCode}</h1>
      <h3 className="title error-message">
        {statusCode === 404
          ? "This page could not be found"
          : "An error occurred on server"}
      </h3>
    </div>
    <p>Oops! Please return to the home page and have a nice day.</p>
  </article>
);

Error.getInitialProps = ({
  res,
  err,
}: {
  res: { statusCode: number };
  err: { statusCode: number };
}) => {
  const statusCode = res?.statusCode || err?.statusCode;
  return { statusCode };
};

export default Error;
