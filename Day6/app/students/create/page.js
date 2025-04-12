"use client";
import React, { use, useState } from "react";
import InputField from "@/app/components/InputField";
import { supabase } from "@/app/lib/supabase";
import {router} from "next/navigation";
import useStore from "@/app/stores/studentStore";
import {useRouter} from 'next/navigation';
export default function CreateStudent() {
  const router=useRouter()
  const { setActiveStudent } = useStore();
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {
    if (!usn || !name || !age || !email || !phone || !address || !gender) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const { data, error } = await supabase.from("Student").insert([
        { name, usn, age, email, phone, address, gender },
      ]).select();
      if (error) {
        alert("Error creating student");
      } else {
        alert(`Student Created: ${JSON.stringify(data)}`);
        setActiveStudent(data);
        router.push("/students/profile")

      }
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-1xl font-bold text-green-600 text-center mb-6">Create Student</h1>
        <div className="space-y-4">
          <InputField type="text" value={name} placeholder="Student Name" onChange={(e) => setName(e.target.value)} />
          <InputField type="text" value={usn} placeholder="Student USN" onChange={(e) => setUsn(e.target.value)} />
          <InputField type="number" value={age} placeholder="Student Age" onChange={(e) => setAge(e.target.value)} />
          <InputField type="email" value={email} placeholder="Student Email" onChange={(e) => setEmail(e.target.value)} />
          <InputField type="number" value={phone} placeholder="Student Phone" onChange={(e) => setPhone(e.target.value)} />
          <InputField type="text" value={address} placeholder="Student Address" onChange={(e) => setAddress(e.target.value)} />
          <InputField type="text" value={gender} placeholder="Student Gender" onChange={(e) => setGender(e.target.value)} />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-md mt-6 transition duration-300"
        >
          Create Student
        </button>
       
      </div>
    </div>
  );
}