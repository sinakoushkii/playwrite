"use client";

import { Metadata } from "next";
import React, { useState } from "react";

const page = () => {
  const [allFormData, setAllFormData] = useState<
    { username: string; email: string }[]
  >([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [showInfo, setShowInfo] = useState(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setAllFormData((prev) => [...prev, formData]);
    setFormData({ username: "", email: "" });
    setShowInfo(true);
  };

  return (
    <div className="border-2">
      <form
        className="flex flex-col gap-2 p-2 w-[400px]"
        onSubmit={submitHandler}
      >
        <h3>Form</h3>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit" className="border-2 w-max p-2" role="button">
          Submit
        </button>
      </form>
      {allFormData.length > 0 && (
        <div className="p-2">
          <h2 className="font-bold">Form Data:</h2>
          <ul role="list">
            {allFormData.map((data, index) => (
              <>
                <li>Username: {data.username}</li>
                <li>Email: {data.email}</li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default page;
