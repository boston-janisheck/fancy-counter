import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ type, setCount }) => {
  const handleClick = () =>
    setCount((prev) => (type === "minus" ? prev - 1 : prev + 1));
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
};

export default CountButton;
