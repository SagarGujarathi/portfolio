import '../css/Navbar.css'
import PhoneIcon from '@mui/icons-material/Phone';

function Navbar() {
    return (
        <>
            <div className="nav-bar">
                <div className="logo">SAGAR</div>
                <ul className="link-wrap">
                    <li className="link">Home</li>
                    <li className="link">About</li>
                    <li className="link">Skills</li>
                    <li className="link">Projects</li>
                    <li className="link"><PhoneIcon /></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar