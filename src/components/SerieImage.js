import '../styles/Series.css';
import bcs from '../assets/better-call-saul.jpeg';
import bb from '../assets/breaking-bad.jpeg';

export default function Image (props) {
    if (props.nom === 'bb') {
        return (
            <div className="image-container">
                <img src={bb} alt="imagen"></img>
                <div className='overlay'>
                    <div className='text'> Breaking Bad </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="image-container">
                <img src={bcs} alt="imagen"></img>
                <div className='overlay'>
                    <div className='text'> Better Call Saul </div>
                </div>
            </div>
        )
    }
}