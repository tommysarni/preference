import './styles.css'

const Landing = ({next}) => {

  return (
    <div className='welcome'>
      <h1 className='welcome_header'>preference.</h1>
      <p className='welcome_p'>you decide.</p>
      <div onClick={() => next()} className='start'>
        click to begin
      </div>
    </div>
  )
}

export default Landing