import Footer from './components/layouts/Footer';
import Home from './components/home';
import Register from './components/Register';
import Companies from './components/layouts/Companies';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import MyDashboard from './dashboard/MyDashboard';
import NewRegistrations from './dashboard/NewRegistrations';
import AllCompanies from './dashboard/AllCompanies';
import AllVendors from './dashboard/AllVendors';
import AllUsers from './dashboard/AllUsers';
import EditCompanyVendorDetails from './dashboard/EditCompanyVendorDetails';
// Edit Vendor Details Screens
import EditVenueVendor from './dashboard/EditVenueVendor';
import NewCVDetails from './dashboard/NewCVDetails';







function App() {
  return (
    <> 
     <Routes> 
           <Route exact path='/' element={<Home/>} />
          
           <Route  path='register' element={<Register/>} />
           <Route  path='companies' element={<Companies/>} />
           <Route  path='login' element={<AdminLogin/>}/>
           <Route  path='dashboard' element={<MyDashboard/>}/>
           <Route  path='new' element={<NewRegistrations/>}/>
           <Route  path='allCompanies' element={ <AllCompanies/> }/>
           <Route  path='allVendors' element={ <AllVendors/>  }/>
           <Route  path='allUsers' element={ <AllUsers/> }/>
           <Route  path='editCVDetails' element={ <EditCompanyVendorDetails/> }/>
           <Route  path='newCVDetails' element={ <NewCVDetails/> }/>
        
           
             
     </Routes>

   
    </>
  );
}

export default App;
