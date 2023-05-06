import '../css/MyContact.css'
import Heading from './Heading'
import react from '../images/react.png'
import PublishIcon from '@mui/icons-material/Publish';
function MyContact() {
    return (
        <div className="my-contact-main-container">
            <Heading
                heading={'My Contact'}
                sticker={react}
            />
            <div className="contact-container">
                <label htmlFor="name" className='label'>name</label>
                <input name='name' type="text" className="contact-input small-input" placeholder='Your name' />
                <label htmlFor="name" className='label'>Email ID</label>
                <input name='email' type="email" className="contact-input small-input" placeholder='Your email' />
                <label htmlFor="message" className='label'>message</label>
                <textarea name='message' className="contact-input" cols="20" rows="10" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum.
                ' />
                <div className="send-button">Submit &nbsp; <PublishIcon /></div>
            </div>
        </div >
    )
}

export default MyContact