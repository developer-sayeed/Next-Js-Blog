"use client";

import React from "react";

export default async function getUsers() {
  //  Get Api Call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Get Error

  if (!response.ok) throw new Error("User not found");
  //   Return data
  return response.json();
}
