import React, { useState }  from 'react';
import Instrument from './Instrument';
import InstrumentData from './InstrumentData'

export default function Percussion(){

    const[sounds, setSounds] = useState(InstrumentData)
    
        return(
            <div className="App">
			    <div className="instrument-container">
				    {sounds.map((sound, i) => (
				    	<Instrument className="instrument" key={i} img={sound.img} letter={sound.key} sound={sound.sound} />
				    ))}
			    </div>
		</div>
        )
    }