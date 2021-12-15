import '../App.css';
import { GiDrumKit } from 'react-icons/gi'

function Footer(){
    return(
        <div className='foot-container'>
            <p className='footer'>Created by Andy McInnes in 2021 <GiDrumKit /> <br /> 
            View <a href="https://andymc7993.github.io/">my portfolio</a></p>
        </div>
    )
}

export default Footer