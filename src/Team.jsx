

import React from 'react';
import { useState } from 'react';


const Team = () => {

  const [firoz, setFiroz] =useState(0);

  const handle=()=>{

   if(firoz <10){

    setFiroz(firoz +1)
   }

  }
  const dicriment=()=>{
    if(firoz >0){
      setFiroz(firoz-1);
    }
    
  }

  return (
    <>

    <button onClick={handle} class="btn btn-primary">++</button> &nbsp;

    <button onClick={dicriment} class="btn btn-danger">--</button>
     <hr />
     <h1>{firoz}</h1>
     <hr />
     <p>{firoz}</p>
    </>
  )
}

export default Team