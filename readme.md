# **useCallback** hook

The **useCallback** hook is a built-in hook in React that optimizes component performance by memoizing functions.

When a parent component re-renders, it can trigger the re-rendering of all its child components, even those that don't need to be re-rendered. This results in unnecessary re-renders and degraded performance.

It's important to understand that, although two functions may appear to be the same, they may not have referential equality in memory. When React re-renders a component, it recreates functions, even if they share the same name, look the same, and have the same definition.

This is where the **useCallback** hook comes in. It allows us to memoize functions and avoid unnecessary re-creation, improving React component performance.

Furthermore, **useCallback** returns a memoized function and not the function call. You can use this memoized function later on in your code.

Here's an example of how to use **useCallback**:

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

In this example, **handleClick** is memoized using **useCallback**. It will only be recreated when **count** changes. The empty array **[]** passed as the second argument to **useCallback** indicates that the function has no dependencies and will only be created once during the initial render.

By using **useCallback**, we can avoid unnecessary re-renders and improve the performance of our React components.
