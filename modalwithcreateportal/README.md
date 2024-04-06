# Machine Coding Round Question: Implement a Modal Component

## Task Description

You are tasked with implementing a reusable modal component in React. The modal should be rendered using `createPortal` and display the children passed to it.

## Requirements

1. Create a React component named `Modal` that renders a modal using `createPortal`.
2. The `Modal` component should accept the following props:
   - `show`: A boolean indicating whether the modal should be displayed.
   - `handleHide`: A function to handle hiding/closing the modal.
   - `children`: The content to be displayed inside the modal.
3. The modal should appear above all other content on the page and have a backdrop that covers the entire viewport.
4. When the modal is displayed (`show` is true), it should render the children passed to it.
5. Clicking outside the modal or on a close button should trigger the `handleHide` function to hide/close the modal.