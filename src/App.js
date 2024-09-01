// import logo from './logo.svg';
import './App.css';
import Navbar from './compo/Navbar';
import Main from './compo/Main';
// import Burger from './compo/Burger';
import { useState } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Register from './compo/Register';
import { useLocation } from 'react-router-dom';
import Login from './compo/Login';
import ScholarshipForm from './compo/ScholarshipForm';
import PrivateRoute from './compo/PrivateRoute';

function App() {
  const [islogin,setlogin] = useState(false);
  const location = useLocation();
  const [burger,setBurger] = useState(false);
  function clickBurger(){
      setBurger((pre)=>!pre);
  }
  return (
    <div>
      <div>
        {location.pathname !== '/Register'  && location.pathname !== '/ScholarshipForm'  && location.pathname !== '/login' && <Navbar clickBurger={clickBurger} islogin={islogin} setislogin={setlogin} />}
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Main burger={burger} clickBurger={clickBurger}/>} />
          <Route path='/Register' element={<Register burger={burger} setlogin={setlogin}/> }></Route>
          <Route path='/login' element={<Login burger={burger} setlogin={setlogin}/> }></Route>
          {/* <Route path='/Scholarshipform' element={<ScholarshipForm/>}></Route> */}
          <Route path='/ScholarshipForm' element={
                <PrivateRoute islogin={islogin}>
                    <ScholarshipForm />
                </PrivateRoute>
            } />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
