import Title from "./Title.jsx";
import Count from "./Count.jsx";
import { useState } from "react";
import Reset from "./Reset.jsx";
import CountButtons from "./CountButtons.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <div>
        <Title />
        <Count count={count} />
        <Reset setCount={setCount} />
        <CountButtons count={count} setCount={setCount} />
      </div>
    </main>
  );
};

export default App;
