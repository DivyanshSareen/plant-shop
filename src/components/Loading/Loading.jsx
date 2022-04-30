const Loading = () => {
  return (
    <img
      style={{
        height: "10rem",
        width: "10rem",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
      alt='loading'
      src={require("../../assests/loading.gif")}></img>
  );
};

export default Loading;
