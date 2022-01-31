const Dot = ({ num, scrollIndex }) => {
  return (
    <div className={scrollIndex === num ? "dot dot__on" : "dot dot__off"}></div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <div className="dots__area">
      <div className="dots__display"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 200,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
        <Dot num={5} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;