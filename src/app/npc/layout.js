import React from "react";

//import components
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex border">
      <Sidebar></Sidebar>
      <div className="w-5/6 m-8 p-6 border-2 rounded-md bg-stone-100">
        {children}
      </div>
    </div>
  );
}
