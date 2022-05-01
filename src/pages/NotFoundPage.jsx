const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "10rem",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}>
      <img src={require("../assets/error.gif")} alt='404-page-not-found'></img>
      <h1 className='h4 center-text' style={{ color: "var(--primary)" }}>
        404 Page Not Found
      </h1>
    </div>
  );
};

export default NotFoundPage;
