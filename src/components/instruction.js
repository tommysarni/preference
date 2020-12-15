import './styles.css'

const Instruction = ({next}) => {

  return (
    <div className='welcome'>
      <h1 className='welcome_header'>how to play</h1>
      <p className='welcome_p'>You will be presented two photos and two corresponding visual sound waves. Click the side you prefer. There are no right or wrong answers. Once you finish, your decisions will combine to form a suprise.</p>
      <div onClick={() => next()} className='start'>
        click to begin
      </div>
    </div>
    
    
  )
}

export default Instruction