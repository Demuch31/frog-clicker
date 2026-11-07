import frog1 from "../assets/frog1.png";
const Frog = ({ points, setPoints, clickPoints }) => {
  return (
    <img
      src={frog1}
      alt="frog-icon"
      className="frog-icon"
      onClick={() => {
        setPoints(points + clickPoints);
        console.log(points);
      }}
    />
  );
};
export default Frog;
