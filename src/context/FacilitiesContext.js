import { createContext,useState } from "react";

const FacilitiesContext = createContext();
export const FacilitiesProvider =({children})=>{
    const [facilities,setFacilities]= useState([]);
    const [facility, setFacility] = useState({});

 
    const getFacilities= async () =>{
        const response = await fetch("/facilities/all");
        const data = await response.json();
        setFacilities(data);
        console.log("facility",data);
        
    }

    const getFacility = async (id) => {
        const response = await fetch(`/facilities/${id}`);
        const data = await response.json();
        setFacility(data);
        console.log(data);
      };
   

    return (
        
        <FacilitiesContext.Provider
        value={{
            getFacilities,
            facilities,
            getFacility,
            facility,
            
        }} >
            {children}
        </FacilitiesContext.Provider>

        )
    }

export default FacilitiesContext;