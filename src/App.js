import logo from './logo.svg';
import './App.css';
import Choice from './components/choice';
import Choose from './components/choose';

const choices1 = [
  {
    img: 'http://tommysarni.github.io/preference/2/pic1.jpg',
    track: 'http://tommysarni.github.io/preference/2/audio1.mp3',
    video: 'http://tommysarni.github.io/preference/2/vid1.mp4'
  },
  {
    img: 'http://tommysarni.github.io/preference/2/pic2.jpg',
    track: 'http://tommysarni.github.io/preference/2/audio2.mp3',
    video: 'http://tommysarni.github.io/preference/2/vid2.mp4'
  }
]

const choices2 = [
  {
    img: 'http://tommysarni.github.io/preference/3/pic1.jpg',
    track: 'http://tommysarni.github.io/preference/3/audio1.mp3',
    video: 'http://tommysarni.github.io/preference/3/vid1.mp4'
  },
  {
    img: 'http://tommysarni.github.io/preference/3/pic2.jpg',
    track: 'http://tommysarni.github.io/preference/3/audio2.mp3',
    video: 'http://tommysarni.github.io/preference/3/vid2.mp4'
  }
]

const choices3 = [
  {
    img: 'http://tommysarni.github.io/preference/4/pic1.jpg',
    track: 'http://tommysarni.github.io/preference/4/audio1.mp3',
    video: 'http://tommysarni.github.io/preference/4/vid1.mp4'
  },
  {
    img: 'http://tommysarni.github.io/preference/4/pic2.jpg',
    track: 'http://tommysarni.github.io/preference/4/audio2.mp3',
    video: 'http://tommysarni.github.io/preference/4/vid2.mp4'
  }
]

const choices4 = [
  {
    img: 'http://tommysarni.github.io/preference/5/pic1.jpg',
    track: 'http://tommysarni.github.io/preference/5/audio1.mp3',
    video: 'http://tommysarni.github.io/preference/5/vid1.mp4'
  },
  {
    img: 'http://tommysarni.github.io/preference/5/pic2.jpg',
    track: 'http://tommysarni.github.io/preference/5/audio2.mp3',
    video: 'http://tommysarni.github.io/preference/5/vid2.mp4'
  }
]

const choices5 = [
  {
    img: 'http://tommysarni.github.io/preference/6/pic1.jpg',
    track: 'http://tommysarni.github.io/preference/6/audio1.mp3',
    video: 'http://tommysarni.github.io/preference/6/vid1.mp4'
  },
  {
    img: 'http://tommysarni.github.io/preference/6/pic2.jpg',
    track: 'http://tommysarni.github.io/preference/6/audio2.mp3',
    video: 'http://tommysarni.github.io/preference/6/vid2.mp4'
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
