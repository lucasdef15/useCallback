# **useCallback** hook

The **useCallback** hook is a built-in hook in React that is used to optimize the performance of components by memoizing functions.

In React, when a parent component renders, it can trigger the re-rendering of all of its child components, even if the child components don't actually need to be re-rendered. This can result in unnecessary re-renders and a degradation of performance.

To prevent this, **useCallback** can be used to memoize functions and only re-render the child component when the props or state that the function depends on changes.

Here is an example of how to use **useCallback**:

```jsx
import { useCallback, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

In this example, **handleClick** is memoized using **useCallback** so that it will only be recreated when **count** changes. The empty array **[]** passed as the second argument to **useCallback** indicates that there are no dependencies for the function, so it will only be created once when the component is initially rendered.

By using **useCallback**, we can avoid unnecessary re-renders and improve the performance of our React components.
