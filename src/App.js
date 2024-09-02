// import logo from './logo.svg';
import './App.css';
import Navbar from './compo/Navbar';
import Main from './compo/Main';
// import Burger from './compo/Burger';
import {useState } from 'react';
import { Route, Routes} from 'react-router-dom';
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
  // var userData;
  const [userData,setUserData] = useState();
  function allData(object){
    setUserData(object);
    // userData = object;
    // console.log("im App");
    // console.log(userData);
  }
  // useEffect(()=>{
  //   allData();
  // },userData);


  return (
    <div>
      <div>
        {location.pathname !== '/PMSSSScholarShip/Register'  && location.pathname !== '/PMSSSScholarShip/ScholarshipForm'  && location.pathname !== '/PMSSSScholarShip/login' && <Navbar clickBurger={clickBurger} islogin={islogin} setislogin={setlogin} />}
      </div>
      <div>
        <Routes>
          <Route path='/PMSSSScholarShip/' element={<Main burger={burger} clickBurger={clickBurger}/>} />
          <Route path='/PMSSSScholarShip/Register' element={<Register burger={burger} setlogin={setlogin} allData={allData}/> }></Route>
          <Route path='/PMSSSScholarShip/login' element={<Login burger={burger} setlogin={setlogin} allData={allData}/> }></Route>
          {/* <Route path='/Scholarshipform' element={<ScholarshipForm/>}></Route> */}
          <Route path='PMSSSScholarShip/ScholarshipForm' element={
                <PrivateRoute islogin={islogin}>
                    <ScholarshipForm userData={userData} />
                </PrivateRoute>
            } />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
