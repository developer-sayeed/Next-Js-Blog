"use client";

import getUsers from "@/libs/getUsers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Our User ",
  description: "Our Super User page",
};
export default async function UserPage() {
  const users = await getUsers();

  return (
    <>
      <h1>Our Developeors</h1>
      <hr />
      <ul className="userData">
        {users.map((item, index) => (
          <li key={index}>
            <h3>
              <Link href={`/user/${item.username}`}>{item.name}</Link>
            </h3>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
