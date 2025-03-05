import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <p>Layout Test</p>
      <div>{children}</div>
    </>
  );
}
