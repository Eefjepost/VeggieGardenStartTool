import React, { useState } from "react";


const Storage = ({  }) => {

const [selected, setSelected] = useState("");
const [location, setLocation] = useState("");
  
const month = new Store();
const loc = new Store();

const mergeStateMonth = (partialStateMonth) =>{
    Object.assign(selected, partialStateMonth);
    console.log(selected);
};

const mergeStateLocation = (partialStateLoc) =>{
    Object.assign(location, partialStateLoc);
    console.log(location);
};

return(
    <Month mergeStateMonth={month.mergeState.bind(month)} /> , 
    <Location mergeStateLocation={loc.mergeState.bind(loc)} />
   

   );

}

export default Storage;