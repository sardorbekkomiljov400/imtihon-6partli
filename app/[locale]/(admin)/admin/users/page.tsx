"use client";

import { getAll } from "@/service/page";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getAll("customer")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data || []);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="min-h-screen p-10 border border-b-cyan-700 rounded-2xl text-white">
      <h1 className="text-3xl font-bold mb-10">Users</h1>
      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className=" backdrop-blur-md  bg-white/10 border border-white/20 rounded-2xl p-5 shadow-lg">
            <div className="mb-3">
              <h2 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-600">@{user.username}</p>
            </div>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-700">Email:</span> {user.email}</p>
              <p>
                <span className="text-gray-700">Role:</span>{" "}
                <span className="px-2 py-1  text-green-300 rounded">
                  {user.role}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;