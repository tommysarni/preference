import React, { useState } from 'react';
import Choice from "./choice";
import End from './end';
import Instruction from './instruction';
import Landing from './landing';
import './styles.css'


const Choose = ({choices}) => {
  
  const [selected, setSelected] = useState(0)
  const [choice, setChoice] = useState(-1)
  const [curr, setCurr] = useState(choices[choice])
  const [arr, setArr] = useState([])

  const restart = () => {
    setSelected(0)
    setChoice(-1)
    setCurr(choices[choice])
    setArr([])
  }

  const next = () => {
    console.log(choice + 1)
    if (selected > 0 || choice < 2) {
      if (selected > 0) {
        setArr([...arr, selected])
      }
      
      setChoice(choice + 1)
      setCurr(choices[choice])
      setSelected(0)
    }
  }


  return (
    <div >
      
        {
          choice === -1 &&
          <div>
          <Landing next={next} />
          </div>
        }
      {
        choice === 0 &&
        <div>
          <Instruction next={next}/>
        </div>
      }
        {
          choice > 0 && choice < 6 &&
          <div className="choice_header">
          <h1 className='better'>Which do you like better?</h1>
          <div className={'choice_container_div'}>
            
            <Choice
              id={1}
            img={curr[0].img}
            track={curr[0].track}
            video={curr[0].video}
              selected={selected}
              setSelected={setSelected} />
            <Choice
              id={2}
            img={curr[1].img}
            track={curr[1].track}
            video={curr[1].video}
              selected={selected}
              setSelected={setSelected} />
          </div>
          <div id='next' onClick={() => next()}
            className={`${(selected > 0 || choice === 0) ? 'start_blue' : 'start'}`}>
            Next
      </div>
          </div>
        }
        {
          choice === 6 && 
          <div>
            <End choices={choices} arr={arr} restart={restart}/>
          </div>
        }
    </div>
  )
}

export default Choose