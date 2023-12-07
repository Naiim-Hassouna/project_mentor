import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';


export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">ProjectMentor.com</p>
                <p>ProjectMentor is a platform where aspiring coders can embark on an
          exciting journey of learning and practicing various programming
          languages.</p>
                <p>&copy; 2024 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>ProjectMentor@gmail.com</p>
                <p>01 234 567</p>
                <p>Beirut-Lebanon</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <Link to="/">
                <p className="sociallink"><FontAwesomeIcon icon={faFacebook} /> Facebook </p>
                </Link>
                <Link to="/">
                <p className="sociallink"><FontAwesomeIcon icon={faTwitter} /> Twitter </p>
                </Link>
                <Link to="/">
                <p className="sociallink"><FontAwesomeIcon icon={faInstagram} /> Instagram </p> 
                </Link>
            </div>
        </div>
    )
}