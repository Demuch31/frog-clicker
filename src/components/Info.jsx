const Info = ({ points, clickPoints, pointsInSecond }) => {
  return (
    <div className="info">
      <span>Points: {points}</span>
      <span>Points on click: {clickPoints}</span>
      <span>Points/s: {pointsInSecond}</span>
    </div>
  );
};
export default Info;
