import useLocalStorage from "../hooks/useLocalStorage";
const Template = ({
  points,
  setPoints,
  clickPoints,
  setClickPoints,
  pointsInSecond,
  setPointsInSecond,
  name,
  firstPrice,
  increase,
  inSecondIncrease,
}) => {
  const [amount, setAmount] = useLocalStorage(name, 0);
  const price = firstPrice * (amount + 1);
  const getPrice = (quantity) => {
    return (quantity * (2 * price + (quantity - 1) * firstPrice)) / 2;
  };
  const buy = (quantity) => {
    const totalPrice = getPrice(quantity);
    points >= totalPrice
      ? (setPoints(points - totalPrice),
        setClickPoints(clickPoints + quantity * increase),
        setAmount(amount + quantity),
        setPointsInSecond(pointsInSecond + quantity * inSecondIncrease))
      : console.log("You can't buy this!");
  };

  return (
    <div className="template">
      <h3>{name}</h3>
      <span>Amount: {amount}</span>
      <br />
      <button
        disabled={points < getPrice(1)}
        onClick={() => {
          buy(1);
        }}
      >
        Buy x1 for {getPrice(1)}
      </button>
      <button
        disabled={points < getPrice(10)}
        onClick={() => {
          buy(10);
        }}
      >
        Buy x10 {getPrice(10)}
      </button>
      <button
        disabled={points < getPrice(100)}
        onClick={() => {
          buy(100);
        }}
      >
        Buy x100 {getPrice(100)}
      </button>
    </div>
  );
};

export default Template;
