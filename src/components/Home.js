import '../css/Home.css'
import myPic from '../images/mypic.jpg'
import DownloadIcon from '@mui/icons-material/Download';

function Home() {
    return (
        <div className="home">
            <div className="home-left-container">
                <div className="intro-text">
                    <div className="intro-greet">
                        <span>Hey There!</span>
                        <span className='fire'>I'm Sagar Gujarathi💎</span>
                    </div>
                    <span className='intro-quote'>A passionate developer who turns what may seem impossible into a reality.</span>
                    <div className='download-cv-button'>Download CV <DownloadIcon /></div>
                </div>
            </div>
            <div className="home-right-container">
                <img src={myPic} className='my-pic' />
            </div>
        </div >
    )
}

export default Home