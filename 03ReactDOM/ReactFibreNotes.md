# React: Fiber Architecture

### Introduction
- React fiber is a reimplementation of React's fundamental algorithm that is still in progress. It is the pinnacle of the React team's two-year study.

- React Fiber's purpose is to make it more suitable for animation, layout, and gestures. Its main feature is incremental rendering, breaking down rendering tasks into smaller portions and distributing them across numerous frames.

- Other notable improvements include the ability to halt, abort, or reuse work as new updates arrive and the ability to prioritize different types of updates and new concurrency primitives.

### React Reconciliation
- It's a React algorithm that compares two trees to see which sections need to be modified in the next update.

- For example, suppose the component's props or state are updated. In that case, React will determine whether or not to perform a DOM update by comparing the newly returned element to the previously rendered one.

- Only React will update the DOM if they are not equal. This is called reconciliation.