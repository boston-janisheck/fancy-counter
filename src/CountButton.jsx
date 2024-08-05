import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ locked, type, setCount }) => {
  const handleClick = (event) => {
    setCount((prev) =>
      type === "minus"
        ? prev - 1 < 0
          ? 0 // Makes sure the count doesn't go below 0
          : prev - 1
        : prev + 1 > 5
        ? 5 // Makes sure the count doesn't go above 5
        : prev + 1
    );
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
};

export default CountButton;
