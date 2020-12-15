import './styles.css'

const Container = ({terminalPage}) => {
  return (
    <div>
      {
        terminalPage && 
          <div>
          </div>
      }
      {
        !terminalPage &&
        <div>
        </div>
      }
    </div>
  )
}

export default Container