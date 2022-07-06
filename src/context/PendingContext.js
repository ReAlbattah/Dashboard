import { createContext,useState } from "react";

const PendingContext = createContext();
export const PendingProvider =({children})=>{
    const [isActive,setIsActive]= useState(false);
 
    const getApprove= async (adminid)=>{
        const response = await fetch(`/facilities/${adminid}`);
        const data = await response.json();
        setIsActive(true);
          
    
      }
   

    return (
        
        <PendingContext.Provider
        value={{
            setIsActive,
            isActive,
            getApprove
        }} >
            {children}
        </PendingContext.Provider>

        )
    }

export default PendingContext;