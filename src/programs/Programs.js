import React from "react";

import FunctionService from "../services/function_service";

function Programs() {

    const showPrograms = () => {
        FunctionService.programsList("Mount Royal University")
    }


  return (
    <div>
      <header>
        <h3>Programs</h3>
      </header>
      <button onClick={showPrograms}>Show Programs</button>
    </div>
  );
}

export default Programs;
