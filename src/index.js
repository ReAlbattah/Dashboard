import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UsersContext';
import { FacilitiesProvider } from './context/FacilitiesContext';
import { ReservationsProvider } from './context/ReservationsContext';
import { ParkProvider } from './context/ParkContext';
import { PendingProvider } from './context/PendingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ChakraProvider>
    <AuthProvider>
      <UserProvider>
    <FacilitiesProvider>
      <ReservationsProvider>
        <ParkProvider>
          <PendingProvider>
    <App />
    </PendingProvider>
    </ParkProvider>
    </ReservationsProvider>
    </FacilitiesProvider>
    </UserProvider>
    </AuthProvider>
    </ChakraProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
