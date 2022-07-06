import { createContext, useState } from "react";

const ParkContext = createContext();

export const ParkProvider = ({ children }) => {

  const [park, getParks] = useState([]);

 
const getPark= async (facility_id) =>{
    const response = await fetch(`/parks/${facility_id}`);
    const data = await response.json();
    getParks(data);
    console.log("data",data);
    
}

  const addPark = async (id,parkNumber,section,price)=>{
    const bodyData = JSON.stringify({parkNumber,section,price});

    const request = await fetch(`/parks/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData,
      });
      const data = await request.json();
        console.log(data);


  }

  return (
    <ParkContext.Provider
      value={{
        park,
        getParks,
        addPark,
        getPark
      }}
    >
      {children}
    </ParkContext.Provider>
  );
};

export default ParkContext;