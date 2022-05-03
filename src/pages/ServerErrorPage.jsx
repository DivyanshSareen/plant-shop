const ServerErrorPage = () => {
  return (
    <div
      style={{
        height: "10rem",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        flexDirection: "column",
      }}>
      <img src={require("../assets/error.gif")} alt='404-page-not-found'></img>
      <h1 className='h4 center-text' style={{ color: "var(--primary)" }}>
        Something Went Wrong on the Server!
      </h1>
    </div>
  );
};

export default ServerErrorPage;
