const CountButtons = ({ setCount }) => {
  return (
    <div className="count-btn">
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default CountButtons;
