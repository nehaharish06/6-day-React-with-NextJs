import {create}from "zustand";



const useStore=create((set) => ({
    activeStudents:{},
    setActiveStudents:(student)=>set({activeStudents:student}),
}))
export default useStore;
