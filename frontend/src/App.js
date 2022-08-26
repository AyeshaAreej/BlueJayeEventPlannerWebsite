import Footer from './components/layouts/Footer';
import Home from './components/home';
import Register from './components/Register';
import Companies from './components/layouts/Companies';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import MyDashboard from './dashboard/MyDashboard';
import NewRegistrations from './dashboard/NewRegistrations';
import AllCompanies from './dashboard/AllCompanies';
import VendorDetails from './dashboard/VendorDetails';
import CompanyDetails from './dashboard/CompanyDetails';





function App() {
  return (
    <> 
     <Routes> 
           <Route exact path='/' element={<Home/>} />
          
           <Route  path='register' element={<Register/>} />
           <Route  path='companies' element={<Companies/>} />
           <Route  path='login' element={<AdminLogin/>}/>
           <Route  path='dashboard' element={<MyDashboard/>}/>
           <Route  path='dashboard/new' element={<NewRegistrations/>}/>
           <Route  path='dashboard/allCompanies' element={ <AllCompanies/> }/>
           <Route  path='CompanyDetails' element={ <CompanyDetails/> }/>
           <Route  path='VendorDetails' element={ <VendorDetails/> }/>
             
     </Routes>

   
    </>
  );
}

export default App;
