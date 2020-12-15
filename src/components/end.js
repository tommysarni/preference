import './styles.css'

const End = ({choices, arr, restart}) => {
  console.log('arr', arr, choices)
  return (
    <div className='final-c'>
      <h1>preference.</h1>
      <div className={`final_choice`}>
        {
          arr.map((choice, i) => {
            console.log(choice, i)
            return (
              <div>
                <img alt='portfolio shot' src={choices[i][choice - 1].img} className={`final_img`} />
                <video id={choices[i][choice - 1].video} width="320" height="240" src={choices[i][choice - 1].video} className={`final_img`} loop autoPlay>
                  Your browser does not support the video tag.
                </video>
                <audio id={choices[i][choice - 1].track} src={choices[i][choice - 1].track} loop autoPlay></audio>
              </div>
            )
          })
        }
      </div>
      <div onClick={() => restart()} className='start'>
        play again
      </div>
    </div>
    
  )
}

export default End