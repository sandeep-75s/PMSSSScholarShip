import './Sliding.css'
import user from './image/user.png'
function Sliding(){
    return (
        <div className='Sliding-div'>
            <img className='user' src={user} alt='user'></img>
            <p className='user-para'>PRADHAN MANTRI’S SPECIAL SCHOLARSHIP
            SCHEME</p>
        </div>
    );
}

export default Sliding;