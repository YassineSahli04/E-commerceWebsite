import './Hero.css';
import { Link } from "react-router-dom";
const Hero = (props) =>{
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="HerpImg" />
                <div className='hero-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
                </div>
            </div>
        </>
    )
}
export default Hero