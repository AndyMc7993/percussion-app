import '../App.css';

function NavBar(){
    return(
        <div className='header'>
            <h1 className='title'>Percussion Kit</h1>
            <h3 className='info'>Simple React application. <br /> <br />
            <span className='extra'>Any sound delay only occurs on first try and should clear after.</span><br />
            <span className="desktop-info">Use keys or click for sound!</span>
            <span className='mobile-info'>Tap for sound!</span>
            </h3>
        </div>
    )
}

export default NavBar