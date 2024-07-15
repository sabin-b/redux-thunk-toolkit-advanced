function Loader() {
  return (
    <div className="absolute z-50 top-0 left-0 right-0 bottom-0 min-h-screen w-full flex justify-center items-center ">
      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span className="cube-span cube-span--1">
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
              }}
              className="taco-container"
            >
              🍕
            </div>
          </span>
          <span className="cube-span cube-span--2">
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
              }}
              className="taco-container"
            >
              🍕
            </div>
          </span>
          <span className="cube-span cube-span--3">
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
              }}
              className="taco-container"
            >
              🍕
            </div>
          </span>
          <span className="cube-span cube-span--4">
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
              }}
              className="taco-container"
            >
              🍕
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
