"use client"
import React from 'react';
import useStore from '@/app/stores/useStore';
export default function ProfilePage(){
    const {activeStudents} = useStore();
    return(
        <div>
            <h1> Student Profile</h1>
            <p> {JSON.stringify(activeStudent)}</p>
            <p>{activeStudent.email}</p>
            <p>{activeStudent.usn}</p>
            <p>{activeStudent.phone}</p>

        </div>
    )
}
