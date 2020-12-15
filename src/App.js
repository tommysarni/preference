import Choose from './components/choose';
import p21 from './media/2/pic1.jpg'
import p22 from './media/2/pic2.jpg'
import a21 from './media/2/audio1.mp3'
import a22 from './media/2/audio2.mp3'
import v21 from './media/2/vid1.mp4'
import v22 from './media/2/vid2.mp4'
import p31 from './media/3/pic1.jpg'
import p32 from './media/3/pic2.jpg'
import a31 from './media/3/audio1.mp3'
import a32 from './media/3/audio2.mp3'
import v31 from './media/3/vid1.mp4'
import v32 from './media/3/vid2.mp4'
import p41 from './media/4/pic1.jpg'
import p42 from './media/4/pic2.jpg'
import a41 from './media/4/audio1.mp3'
import a42 from './media/4/audio2.mp3'
import v41 from './media/4/vid1.mp4'
import v42 from './media/4/vid2.mp4'
import p51 from './media/5/pic1.jpg'
import p52 from './media/5/pic2.jpg'
import a51 from './media/5/audio1.mp3'
import a52 from './media/5/audio2.mp3'
import v51 from './media/5/vid1.mp4'
import v52 from './media/5/vid2.mp4'
import p61 from './media/6/pic1.jpg'
import p62 from './media/6/pic2.jpg'
import a61 from './media/6/audio1.mp3'
import a62 from './media/6/audio2.mp3'
import v61 from './media/6/vid1.mp4'
import v62 from './media/6/vid2.mp4'

const choices1 = [
  {
    img: p21,
    track: a21,
    video: v21
  },
  {
    img: p22,
    track: a22,
    video: v22
  }
]

const choices2 = [
  {
    img: p31,
    track: a31,
    video: v31
  },
  {
    img: p32,
    track: a32,
    video: v32
  }
]

const choices3 = [
  {
    img: p41,
    track: a41,
    video: v41
  },
  {
    img: p42,
    track: a42,
    video: v42
  }
]

const choices4 = [
  {
    img: p51,
    track: a51,
    video: v51
  },
  {
    img: p52,
    track: a52,
    video: v52
  }
]

const choices5 = [
  {
    img: p61,
    track: a61,
    video: v61
  },
  {
    img: p62,
    track: a62,
    video: v62
  }
]


function App() {
  console.log()
  return (
    <div className="App">
      <Choose choices={[choices1, choices2, choices3, choices4, choices5]}/>
      
    </div>
  );
}

export default App;
