import { useState } from "react";
import { db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";
import "./App.css";
import { AddStuff } from "./components/AddStuff";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen my-auto">
      <AddStuff />
    </div>
  );
}

export default App;
