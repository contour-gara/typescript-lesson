import React, { useState } from "react";

// 2-16
// 2-17

interface Props {
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "dummy" });

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <h1>{user.name}</h1>
    </div>
  );
};

export default TestComponent;
