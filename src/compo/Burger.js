
import { NavLink } from 'react-router-dom';
import './Burger.css'
function Burger({clickBurger}){
    function burgerHandler(){
        clickBurger();
    }
    return(
        <div className="burger1">
            <ul className="burger1-child">
                <NavLink className="item" to='/'>Home</NavLink>
                <NavLink  className="item" to='/login' onClick={burgerHandler}>Login</NavLink>
                <NavLink  className="item" to='/Register' onClick={burgerHandler}>Register</NavLink>
            </ul>
        </div>
    );
}

export default Burger;