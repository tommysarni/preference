import React, { useEffect, useState } from 'react';
import './styles.css'
const Choice = ({id, img, track, video, selected, setSelected}) => {

  useEffect(() => {
    const toggleOff = () => {
      var vid = document.getElementById(video);
      // var a = document.getElementById(track);
      // a.muted = true;
      vid.pause()
    }
    const toggleOn = () => {
      var vid = document.getElementById(video);
      // var a = document.getElementById(track);
      // a.muted = false;
      vid.play()
    }
    if (selected !== id) {
      toggleOff()
    } else {
      toggleOn()
    }
  }, [selected, id, track, video])


  

  const play = (id) => {
    console.log("clicked", id)
    var vid = document.getElementById(video);
    // var audio = document.getElementById(track);
    if (id === selected) {
      vid.pause()
      // audio.pause()
      // audio.muted = true
      setSelected(0)
    } else {
      // audio.muted = false
      // audio.play()
      vid.play()
      setSelected(id)
    }
  }

  return (
    <div className={`choice_div`}>
      <div className='vertical'>
        <img alt='portfolio shot' src={img} className={`${selected === id ? 'choice_img with_border' : 'choice_img no_border'}`}
          onClick={() => { play(id) }} />
        <video id={video} width="320" height="240" src={video} className='choice_vid' loop>
          Your browser does not support the video tag.
      </video>
        {/* <audio id={track} src={track} loop></audio> */}
      </div>
      

    </div>
  )
}

export default Choice