// @ts-nocheck

// When using inline styles in React, you can use React.CSSProperties to describe the object passed to the style prop. This type is a union of all the possible CSS properties, and is a good way to ensure you are passing valid CSS properties to the style prop, and to get auto-complete in your editor.

interface MyComponentProps {
  style: React.CSSProperties;
}

