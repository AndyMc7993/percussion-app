/* Images */
import drumImg from '../images/drum.png'
import cymbalImg from '../images/cymbal.png'
import cowbellImg from '../images/cowbell.png'
import gongImg from '../images/gong.png'
import thaiImg from '../images/thai-gong.png'
import triangleImg from '../images/triangle.png'

/* Sounds */
import bass from '../sounds/bass-drum.mp3'
import cowbell from '../sounds/cowbell.mp3'
import ride from '../sounds/cymbal1.mp3'
import crash from '../sounds/cymbal2.mp3'
import gong from '../sounds/gong.mp3'
import hiHat from '../sounds/hi-hat.wav'
import snare from '../sounds/snare.mp3'
import thai from '../sounds/thai-gong.mp3'
import tom1 from '../sounds/tom1.mp3'
import tom2 from '../sounds/tom3.mp3'
import tom3 from '../sounds/tom2.mp3'
import triangle from '../sounds/triangle.mp3'

const instrumentData = [
    {
        id: 1,
        name: 'Thai-gong',
        img: thaiImg,
        sound: thai,
        key: "1"
    },
    {
        id: 2,
        name: 'Gong',
        img: gongImg,
        sound: gong,
        key: "2"
    },
    {
        id: 3,
        name: 'Triangle',
        img: triangleImg,
        sound: triangle,
        key: "3"
    },
    {
        id: 4,
        name: 'Cow-bell',
        img: cowbellImg,
        sound: cowbell,
        key: "4"
    },
    {
        id: 5,
        name: 'Hi-hat',
        img: cymbalImg,
        sound: hiHat,
        key: "Q"
    },
    {
        id: 6,
        name: 'Crash-cymbal',
        img: cymbalImg,
        sound: crash,
        key: "W"
    },
    {
        id: 7,
        name: 'Tom-1',
        img: drumImg,
        sound: tom1,
        key: "E"
    },
    {
        id: 8,
        name: 'Tom-2',
        img: drumImg,
        sound: tom2,
        key: "R"
    },
    {
        id: 9,
        name: 'Ride-cymbal',
        img: cymbalImg,
        sound: ride,
        key: "T"
    },
    {
        id: 10,
        name: 'Snare-drum',
        img: drumImg,
        sound: snare,
        key: "A"
    },
    {
        id: 11,
        name: 'Bass-drum',
        img: drumImg,
        sound: bass,
        key: "S"
    },
    {
        id: 12,
        name: 'Floor-tom',
        img: drumImg,
        sound: tom3,
        key: "Y"
    }
]

export default instrumentData