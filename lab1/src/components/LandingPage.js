import './LandingPage.css'
import image from '../images/computer.png'
import image2 from '../images/education.png'
import image3 from '../images/herramientas.png'
import image4 from '../images/ironhack.png'
import image5 from '../images/laptop.png'
import image6 from '../images/menu.png'

function LandingPage(props){
const intro = props.landing
const title = intro.title
const description = intro.description
const end = intro.end

return(
<div className="intro-item">
    <div className="nav">
      <img className="nav-logo" src={image4}/>
      <img className="nav-logo" src={image6}/>
    </div>
    <div className="content-item"> 
        <div className="content">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <button>
            <h3>{end}</h3>
            </button>
        </div>
    </div>
    <div className="footer-item">
        <img src={image3}/>
        <img src={image2}/>
        <img src={image5}/>
        <img src={image}/>
    </div>
   
</div>

)


}

export default LandingPage;