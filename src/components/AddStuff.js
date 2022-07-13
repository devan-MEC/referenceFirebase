import React from "react";
import { useState } from "react";
import { db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

export const AddStuff = () => {
  const [item, setItem] = useState("");
  const itemReference = collection(db, "items");
  const addItem = async () => {
    await addDoc(itemReference, { item });
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 items-center   bg-gray-200 p-2 max-w-sm rounded shadow-md ">
        <input
          className="border-2 rounded-md  p-2"
          onChange={(e) => {
            setItem(e.target.value);
            console.log(item);
          }}
        />
        <button
          className="bg-blue-600 rounded-md p-2 text-white hover:bg-blue-400"
          onClick={addItem}
        >
          CLICK ME
        </button>
      </div>
    </div>
  );
};
