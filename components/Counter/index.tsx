"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      Count: {count}{" "}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
