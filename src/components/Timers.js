import { TimerBox } from "./TimerBox"

export const Timers = ({timerList, removeTimer}) => {
  return(
    <>
      {       
        timerList.length > 0 ? (
          timerList.map((timerItem) => (
            <TimerBox            
              timerItem={timerItem}
              key={timerItem.id}
              removeTimer={removeTimer}
            />
          ))
        )
        :
        <h2>No projects</h2>
      }
    </>
  )
}