import { useEffect, useState } from "react";

function Instrument(props) {
	const [playing, setPlaying] = useState(false);
	const play = () => {
		setPlaying(true);

		new Audio(props.sound).play();

		setTimeout(() => {
			setPlaying(false);
		}, 150);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === props.letter.toLowerCase()) {
				play();
			}
		});
	}, []);

	return (
        <div className="instrument-box">
            <div className={`instrument ${playing ? "playing" : ""}`} onClick={play}>
                <img className="instrument-img" src={props.img} alt="Instrument-img"></img>
		    </div>
            <div className="key-container">
                <div className="key">{props.letter}</div>
            </div>
        </div>
		
	);
}

export default Instrument;