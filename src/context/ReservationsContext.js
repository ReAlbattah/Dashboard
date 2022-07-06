import { createContext,useState } from "react";

const ReservationsContext = createContext();
export const ReservationsProvider =({children})=>{
    const [reservations,setReservations]= useState([]);
 
    const getReservations= async (facility_id) =>{
        const response = await fetch(`/reservations/${facility_id}`);
        const data = await response.json();
        setReservations(data);
        console.log("data",data);
        
    }

    return (
        
        <ReservationsContext.Provider
        value={{
            getReservations,
            reservations,

        }} >
            {children}
        </ReservationsContext.Provider>

        )
    }

export default ReservationsContext;