import Frog from "./components/Frog";
import Template from "./components/Template";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";
import Info from "./components/Info";
export default function App() {
  const [pointsInSecond, setPointsInSecond] = useLocalStorage(
    "points-in-second",
    0,
  );
  const [points, setPoints] = useLocalStorage("points", 0);
  const [clickPoints, setClickPoints] = useLocalStorage("click-points", 1);
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((x) => x + pointsInSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [pointsInSecond, setPoints]);
  return (
    <>
      <div className="else">
        <Info
          points={points}
          clickPoints={clickPoints}
          pointsInSecond={pointsInSecond}
        />
        <Frog points={points} setPoints={setPoints} clickPoints={clickPoints} />
      </div>
      <div className="con">
        <Template
          points={points}
          setPoints={setPoints}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
          pointsInSecond={pointsInSecond}
          setPointsInSecond={setPointsInSecond}
          name={"Mosquito"}
          firstPrice={10}
          increase={1}
          inSecondIncrease={1}
        />
        <Template
          points={points}
          setPoints={setPoints}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
          pointsInSecond={pointsInSecond}
          setPointsInSecond={setPointsInSecond}
          name={"Bug"}
          firstPrice={100}
          increase={10}
          inSecondIncrease={10}
        />
        <Template
          points={points}
          setPoints={setPoints}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
          pointsInSecond={pointsInSecond}
          setPointsInSecond={setPointsInSecond}
          name={"Worm"}
          firstPrice={2000}
          increase={1000}
          inSecondIncrease={20}
        />
        <Template
          points={points}
          setPoints={setPoints}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
          pointsInSecond={pointsInSecond}
          setPointsInSecond={setPointsInSecond}
          name={"Earthworm"}
          firstPrice={10000}
          increase={5000}
          inSecondIncrease={300}
        />
        <Template
          points={points}
          setPoints={setPoints}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
          pointsInSecond={pointsInSecond}
          setPointsInSecond={setPointsInSecond}
          name={"Slug"}
          firstPrice={100000}
          increase={50000}
          inSecondIncrease={2000}
        />
        <Template
          points={points}
          setPoints={setPoints}
          clickPoints={clickPoints}
          setClickPoints={setClickPoints}
          pointsInSecond={pointsInSecond}
          setPointsInSecond={setPointsInSecond}
          name={"Snail"}
          firstPrice={20000000}
          increase={10000000}
          inSecondIncrease={100000}
        />
      </div>
      <footer>
        <a href="https://github.com/Demuch31/frog-clicker" target="_blank">
          GitHub
        </a>
      </footer>
    </>
  );
}
