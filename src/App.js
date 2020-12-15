import logo from './logo.svg';
import './App.css';
import Choice from './components/choice';
import Choose from './components/choose';

const choices1 = [
  {
    img: '/2/pic1.jpg',
    track: '/2/audio1.mp3',
    video: '/2/vid1.mp4'
  },
  {
    img: '/2/pic2.jpg',
    track: '/2/audio2.mp3',
    video: '/2/vid2.mp4'
  }
]

const choices2 = [
  {
    img: '/3/pic1.jpg',
    track: '/3/audio1.mp3',
    video: '/3/vid1.mp4'
  },
  {
    img: '/3/pic2.jpg',
    track: '/3/audio2.mp3',
    video: '/3/vid2.mp4'
  }
]

const choices3 = [
  {
    img: '/4/pic1.jpg',
    track: '/4/audio1.mp3',
    video: '/4/vid1.mp4'
  },
  {
    img: '/4/pic2.jpg',
    track: '/4/audio2.mp3',
    video: '/4/vid2.mp4'
  }
]

const choices4 = [
  {
    img: '/5/pic1.jpg',
    track: '/5/audio1.mp3',
    video: '/5/vid1.mp4'
  },
  {
    img: '/5/pic2.jpg',
    track: '/5/audio2.mp3',
    video: '/5/vid2.mp4'
  }
]

const choices5 = [
  {
    img: '/6/pic1.jpg',
    track: '/6/audio1.mp3',
    video: '/6/vid1.mp4'
  },
  {
    img: '/6/pic2.jpg',
    track: '/6/audio2.mp3',
    video: '/6/vid2.mp4'
  }
]


function App() {
  return (
    <div className="App">
      <Choose choices={[choices1, choices2, choices3, choices4, choices5]}/>
      
    </div>
  );
}

export default App;
