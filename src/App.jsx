import { useState, useEffect, useCallback } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  //we want to use useCallback if we have our function in a dependency array it can be whatever hook, it doesn't just have to be useEffect. then if that whatever hook has the dependency array we'll be looking for a change of that function, then we need to wrap it in useCallback.

  //we also may need to wrap a function in useCallback if we were passing it down as a prop and the component we were passing it to is memoized, beacause if we didn't wrap it in useCallback and we kept sending a new function it would break that memoization as well. But usually we see the use of useCallback because a function is going into a depency array like we see here.

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
    setResult(sum());
  }, [sum]);

  return (
    <main className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || "--"}</h1>
    </main>
  );
}

export default App;
