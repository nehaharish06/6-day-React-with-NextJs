"use client";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    loadStudentList();
  }, []);

  async function loadStudentList() {
    const { data, error } = await supabase.from("Student").select();
    if (error) {
      alert(JSON.stringify(error));
    } else {
      setStudentList(data);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {studentList.map((stud, index) => (
        <div key={index} className="border p-4 m-2 rounded shadow-md w-3/4">
          <h1 className="text-xl font-bold">{stud.name}</h1>
          <p><strong>USN:</strong> {stud.usn}</p>
          <p><strong>Age:</strong> {stud.age}</p>
          <p><strong>Email:</strong> {stud.email}</p>
          <p><strong>Phone:</strong> {stud.phone}</p>
          <p><strong>Address:</strong> {stud.address}</p>
          <p><strong>Gender:</strong> {stud.gender}</p>
        </div>
      ))}
    </div>
  );
}