const ResetButton = ({ setCount }) => {
  return (
    <button className="reset-btn" onClick={() => setCount(0)}>
      Reset
    </button>
  );
};

export default ResetButton;
