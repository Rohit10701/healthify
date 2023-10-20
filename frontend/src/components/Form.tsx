'use client'
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function Form() {

  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name ?? "");
  const [caretaker, setCaretaker] = useState("");
  const [isPatient, setIsPatient] = useState(true);
  const [number, setNumber] = useState("");
  const saveData = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent default form submission

    const updatedData = isPatient
      ? {
          username: name,
          isPatient: isPatient,
          caretaker: caretaker,
          email: session?.user?.email,
          number: number,
        }
      : {
          username: name,
          isPatient: isPatient,
          caretaker: "",
          email: session?.user?.email,
          number: number,
        };

    console.log(updatedData, "sent");
    fetch("http://localhost:5000/users/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data successfully sent.");
        } else {
          console.error("Failed to send data.");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <form
      className="flex flex-row w-[800px] justify-center gap-x-10"
      onSubmit={saveData}
    >
      <div className="flex flex-col w-[600px]">
        <h1 className="font-semibold text-xl m-auto">Fill in the details...</h1>
        <input
          className="w-full border-2 border-black h-[50px] px-6 my-2 rounded-full"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border-2 border-black h-[50px] px-6 my-2 rounded-full"
          placeholder="email"
          value={session?.user?.email ?? ""}
          disabled
        />
        <input
          className="w-full border-2 border-black h-[50px] px-6 my-2 rounded-full"
          placeholder="mobile number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {isPatient && (
          <input
            className="w-full border-2 border-black h-[50px] px-6 my-2 rounded-full"
            placeholder="enter email of caretaker"
            value={caretaker}
            required
            onChange={(e) => setCaretaker(e.target.value)}
          />
        )}
        <div className="flex flex-row justify-start p-3">
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="yes"
            name="patientStatus"
            checked={isPatient === true}
            onChange={() => setIsPatient(true)}
          />
          <label htmlFor="no">No</label>
          <input
            type="radio"
            id="no"
            name="patientStatus"
            checked={isPatient === false}
            onChange={() => setIsPatient(false)}
          />
        </div>
        <button
          type="submit"
          className="border-2 border-black rounded-full w-40 h-10 hover:bg-orange-600"
        >
          submit
        </button>
      </div>
    </form>
  );
}
