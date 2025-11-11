"use client";

import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [showInfo, setShowInfo] = useState(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setShowInfo(true);
  };

  return (
    <div className="border-2">
      <form className="flex flex-col gap-2 p-2 w-[400px]" onSubmit={submitHandler}>
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
        <button type="submit" className="border-2 w-max p-2">
          Submit
        </button>
      </form>
      {showInfo && (
        <div className="p-2">
          <h2 className="font-bold">Form Data:</h2>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default page;
