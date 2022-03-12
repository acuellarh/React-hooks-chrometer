import { TimerBox } from "./TimerBox"

export const Timers = ({timerList, removeTimer, updateTimer}) => {
  return(
    <>
      {       
        timerList.length > 0 ? (
          timerList.map((timerItem) => (
              <TimerBox            
                timerItem={timerItem}
                key={timerItem.id}
                removeTimer={removeTimer}
                updateTimer={updateTimer}
              />
          ))
        )
        :
        <h2>No projects</h2>
      }
    </>
  )
}

