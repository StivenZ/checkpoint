
import { useEffect, useState } from "react";

function App2() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState<string>("SmartRanks");
  if (count === 0) {
  }

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <div>
      {count}
      {name}
    </div>
  );
}

export default App2;