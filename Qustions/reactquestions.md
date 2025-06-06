# React Questions

### What is the difference between state and props?

- state is a local data storage that is managed within a component and can change over time. state is used for data tha changes within a component.
- props are read-only attributes passed from a parent component to a child component. props are used to pass data and event handlers to child components

### Describe the benefits of React

- JS library for building interfaces. Allows developers to create reusable components that manage their own state.
- Benefits are a component based architecture for modular code, virtual DOM for efficient updates, declarative UI for more readable code, one-way data binding for predictable data flow

Declarative: you describe the desired state of your UI based on data and React handles updating the actual DOM efficiently

Virtual DOM: lightweight in-memory representation of the actual DOM, allowing it to perform updates selectively and efficiently

### Difference between React Node, React Element, React Component

- React Node is the most basic unit. It can render a React element, a string, a number, or boolean. Basicaly anything tha tcan be rendered is a React Node
- React Element is an immutable plain object, representing what you want to see on the screen.
- React Component is a reusable piece of UI that can accept inputs and returns React elements describing the UI

### Class vs Functional Components

- Function components are functions that take functions as props and return a React element
- Class components extend React.Component and have a render method. Traditionally they handled state and lifecycle methods. Now used mainly for ErrorBoundary

### What is JSX?

- syntax extension for Javascript that allows you to write HTML-like code within Javascript

### What is the purpose of the `key` prop in React?

- used to uniquely identify elements in a list. React can quicky determine which items need to be re-rendered, added, or removed

### What are the consequences of using indices as teh value for `key`?

- When the order of items changes, React may not correctly identify which items have changed, leading to unnecessary re-renders or incorrect component updates

### Controlled vs Uncontrolled React Components

- controlled components where form data is handled by the component's state. any changes to the form input are handled through event handlers
- uncontrolled components store their own state internally and rely on refs to access form values, ie: `inputRef.current.value`

### Pitfalls when using context in React

- performance issues if not managed properly. Can cause unnecessary re-renders of componets that consume the context. Better to use it sparingly. Use Redux or Zustand for more complex state needs

### What are React hooks

- allow you to use state and other React features (lifecycle methods) without writing a class. Reduces the need for lifecycle methods
- improves readablity
- always at the top level for your React fuction, never inside loops, conditions, or nested functions

### Difference between useEffect and useLayoutEffect?

- useEffect runs asynchronously after the DOM has been painted. Used for data fetching, subscriptions, logging
- useLayoutEffect runs synchronously after DOM mutations, but before the browser paints. Used for tasks like measuring DOM elements or synchronizing the UI with the DOM

### What are side effects?

- operations within components that occur as a result of rendering but not directly related to producing the UI output
- operations like fetching data, updating a subscription(WebSocket connections, event listeners like window resize or scroll, subscribing to updates from a real-time database, like Firebase), or interacting with the browser's DOM API(focusing on input field)

### What is the purpose of a callback function in setState?

- callback function argument is used to ensure the state updates are based on the most recent state and props. Useful when the new state depends on the previous state

### What does the dependency array of `useEffect` do?

- determines when useEffect should re-run. If there is no dependency array, it runs on every render

### What does `useRef` do?

- used to create a mutable object that persists across renders. Can store mutable values that do not cause re-renders when updated, can keep a reference to a value without tiggering a re-render
- used to focus an input element
- used to store previous value

### What is `useCallback`?

- used to memoize callback functions, preventing them from being recreated on every render
- use useCallback when you have a function that is passed as a prop to a child component and you want to avoid the child component re-rendering unnecessarily
- When passing a function as a prop, the child component may re-render every time the parent component re-renders

### What is `useMemo`?

- used to memoize expensive calculations so they are only recomputed once the dependencies have changed





What is a HOC
