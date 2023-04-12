import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto '>
            <div className='my-10'>
            <p className='text-4xl font-semibold my-6'>1.when should use Context Api?</p>
             <p>you can simplify  code and make it more maintainable by avoiding the need to pass props between multiple levels of the component tree.   it's important to keep in mind that overusing Context API can also make  our code less readable and harder to debug, so it's important to use it judiciously and only when necessary.Context API provides a way to share data between components without having to pass props explicitly. Instead, you can create a context object at a higher level in the component tree, and any component that needs access to the shared data can simply access it through the context object.</p>
            </div >
            <div className='my-10'>
                <h1 className='text-4xl font-semibold my-6'>2.What is custom hook</h1>
                <p>
                A custom hook is a JavaScript function that utilizes one or more of React's built-in hooks, such as useState or useEffect, to provide custom functionality to a React component. The idea behind custom hooks is to abstract complex logic and state management into reusable and composable functions that can be used across multiple components in a React application.Custom hooks typically follow the naming convention of using the prefix "use" to indicate that they are hooks, and are often defined in their own module or file to promote reusability.
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-4xl font-semibold my-6'>3.what is the use of useRef?</h1>
                <p>The useRef hook in React provides a way to hold a mutable value or reference that persists across component renders. It's primarily used for accessing or modifying a DOM element, managing focus, or caching a value that would otherwise be lost on re-renders.Using useRef in this way allows us to access and manipulate DOM elements directly, without having to rely on event handlers or prop drilling. It also allows us to persist data across re-renders without triggering a re-render itself.</p>
            </div>
            <div className='my-10'>
                <h1 className='text-4xl font-semibold my-6'>4.what is useMemo?</h1>
                <p>
                useMemo is a hook that allows you to optimize the performance of your component by memoizing the results of a function call. The basic idea is that if you have a computationally expensive function that is being called repeatedly in your component, you can use useMemo to memoize the result of the function and only recompute it when the inputs to the function change.The function will only be re-evaluated if one or more of the dependencies have changed since the last render. If the dependencies have not changed, useMemo will return the memoized value from the previous render.
                </p>
            </div>
        </div>
    );
};

export default Blog;