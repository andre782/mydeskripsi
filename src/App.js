import React from "react";
import RoundOne from "./Component/roundDesign/RoundOne";
import RoundTwo from "./Component/roundDesign/RoundTwo";
import RoundThree from "./Component/roundDesign/RoundThree";
import RoundFour from "./Component/roundDesign/RoundFour";
import Home from "./Home";



function App() {
  return (
    <div className="w-full h-screen font-bodyFont text-textColor bg-black relative overflow-hidden">
        <dev className="max-w-screen-2x1 h-full mx-auto flex justify-center items-center">
        <Home/>  
         </dev>

      <div className="w-full h-full absolute top-0 left-0 z-10 ">
       <RoundOne/>
       <RoundTwo/>
       <RoundThree/>
       <RoundFour/>      
      </div>
    </div>
  );
}

export default App;
