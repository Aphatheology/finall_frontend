import './LandingPage.css';
import {RiFacebookCircleFill} from "react-icons/ri"
import {BsPinterest} from "react-icons/bs"
import {SiYoutubemusic} from "react-icons/si"
import{AiFillTwitterCircle} from "react-icons/ai"
import{GiRocketThruster} from "react-icons/gi"
import { IconContext } from "react-icons";
import Form from "./Form"

function LandingPage() {
  return (
    <div className="landing-page">

        <div className='top-icon'>
                <IconContext.Provider value={{ className: "top-react-icon", }}>
                    <GiRocketThruster color="white" />
                </IconContext.Provider>

                <h2>We are coming soon</h2>

                <p>
                    We are almost there! If you want to get notified when the website goes live, subscribe to our mailing list
                </p>
        </div>

        <Form />

        <div className="footer-icons">
            <IconContext.Provider value={{ className: "bottom-react-icons", }}>
            <RiFacebookCircleFill color ="#0080ff" />  
            <BsPinterest color ="red"/>
            <AiFillTwitterCircle color = "#ffffff" />
            <SiYoutubemusic color= "#ff471a" />
            </IconContext.Provider>
        </div> 
        
    </div>
  )
}

export default LandingPage