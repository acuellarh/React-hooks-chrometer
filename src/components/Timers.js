import { TimerBox } from "./TimerBox"

export const Timers = ({timerList}) => {
  return(
    <>
      {       
        timerList.length > 0 ? (
          timerList.map((timerItem) => (
            <TimerBox            
              timerItem={timerItem}
              key={timerItem.id}
            />
          ))
        )
        :
        <h2>No projects</h2>
      }
    </>
  )
}