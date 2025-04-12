import React from "react";
export default function NavigationBar(props) {
    return(
        <nav className="flex flex-col md:flex-row justify-between text-lg font-bold">
        <img src="https://www.sahyadri.edu.in/images/logo.svg" width={200}/>
        <div className="flex flex-col md:flex-row space-x-5 ">
        <div className="flex flex-row space-x-5">
           <a>About</a>
           <a>Academics</a>
           <a>Admissions</a>
           <a>Life at sahyadri</a>
           <a>Placement</a>
           <a>Recruitment</a>
        </div>
        </div>
      </nav>
    );
}