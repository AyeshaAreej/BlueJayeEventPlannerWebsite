// import './App.css';
import Footer from './components/layouts/Footer';
import Home from './components/home';
import Register from './components/Register';
import Companies from './components/layouts/Companies';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <> 
     <Routes> 
           <Route exact path='/' element={<Home/>} />
          
           <Route  path='/register' element={<Register/>} />
           <Route  path='/companies' element={<Companies/>} />
           <Route  path='/login' element={<AdminLogin/>} />
     </Routes>

    <Footer/>
    </>
  );
}

export default App;
