import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Users from './components/Dashboard/Users';
import AdminHome from './components/Dashboard/AdminHome';
import Facilities from './components/Dashboard/Facilities';
import AdminDashboard from './components/facilityDashboard/AdminDashboard';
import Reservations from './components/facilityDashboard/Reservations';
import Park from './components/facilityDashboard/Park';
import Paypal from './components/Paypal';
import Login from './components/Login';
import Register from './components/Register';



const App= ()=> {
  
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<AdminHome />} />
    <Route path='/users' element={<Users />} />
    <Route path='/facilities' element={<Facilities />} />
{/*  --------------------------------------------------- Big Admin    */}

    {/* <Route path='/facility' element={<AdminDashboard />} /> */}
    <Route path='/facility/reservation/:id' element={<Reservations />} />
    <Route path='/facility/park' element={<Park />} />
{/* ---------------------------------------------------- facility Admin */}

<Route path='/pay' element={<Paypal />} />

{/* ---------------------------------------------------- facility Admin */}

<Route path='/admin/login' element={<Login />} />
<Route path='/register' element={<Register />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
