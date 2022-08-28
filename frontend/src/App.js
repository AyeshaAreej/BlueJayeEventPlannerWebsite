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
import VendorDetails from './dashboard/VendorDetails';
import CompanyDetails from './dashboard/CompanyDetails';
// Edit Vendor Details Screens
import EditCatrngVendor from './dashboard/EditCatrngVendor';
import EditDcortionVendor from './dashboard/EditDcortionVendor';
import EditPhotoVendor from './dashboard/EditPhotoVendor';
import EditVenueVendor from './dashboard/EditVenueVendor';






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
           <Route  path='companyDetails' element={ <CompanyDetails/> }/>
           <Route  path='vendorDetails' element={ <VendorDetails/> }/>
           <Route  path='editPhotoVendor' element={ <EditPhotoVendor/> }/>
           <Route  path='editVenueVendor' element={ <EditVenueVendor/> }/>
           <Route  path='editDecorationVendor' element={ <EditDcortionVendor/> }/> 
           <Route  path='editCatererVendor' element={ <EditCatrngVendor/> }/>

           
             
     </Routes>

   
    </>
  );
}

export default App;
