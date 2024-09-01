import './Footer.css'
import fp from './image/Footer Page.png';
import IndiaGov from './image/indiagov 1.png'
import di from './image/di 1.png'
import mi from './image/meity 1.png'
import nic from './image/logo_nic 1.png'
import mg from './image/mygov 1.png'
import dbt from './image/DBT 1.png'
function Footer(){
    return(
        <div className='footer-main-div'>
            <div className='footer-div-child'>
                <div className='footer-text'>Achievements</div>
                <div className='footer-card'>
                    <div className='card-1'>
                        <h2>Demo Achievement 1 </h2>
                    </div>
                    <div className='card-1'>
                        <h2>Demo Achievement 2 </h2>
                    </div>
                    <div className='card-1'>
                        <h2>Demo Achievement 3 </h2>
                    </div>
                </div>
            </div>
            <div className='other-govt-web'>
                <a className='web-card-link-1' href=''>
                    <div className='web-card-1' >
                        <img className='card-img' src={IndiaGov}></img>
                    </div>
                </a>
                <a className='web-card-link-1' href=''>
                    <div className='web-card-1' >
                        <img className='card-img' src={di}></img>
                    </div>
                </a>
                <a className='web-card-link-1' href=''>
                    <div className='web-card-1' >
                        <img className='card-img' src={mi}></img>
                    </div>
                </a>
                <a className='web-card-link-1' href=''>
                    <div className='web-card-2' >
                        <img className='card-img' src={nic}></img>
                    </div>
                </a>
                <a className='web-card-link-1' href=''>
                    <div className='web-card-2' >
                        <img className='card-img' src={mg}></img>
                    </div>
                </a>
                <a className='web-card-link-1' href=''>
                    <div className='web-card-2' >
                        <img className='card-img' src={dbt}></img>
                    </div>
                </a>

            </div>
            <div className='footer-list-div'>
                <ul className='list-div-ul'>
                    <li>Copyright Policy</li>
                    <li>|</li>
                    <li>Privacy Policy</li>
                    <li>|</li>
                    <li>Terms and Conditions</li>
                    <li>|</li>
                    <li>Disclaimer</li>
                    <li>|</li>
                    <li>Hyperlink</li>
                    <li>|</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div className='update-date'>
                Last Update on 09-01-2024
            </div>
        </div>
    );
}

export default Footer;