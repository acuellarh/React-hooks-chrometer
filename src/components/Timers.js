import { TimerBox } from "./TimerBox"

export const Timers = ({timerList}) => {
  return(
    <>
      {
        timerList.length > 0 ? (
          timerList.map((timerItem) => (
            <TimerBox
              key={timerItem.id}
              timerItem={timerItem}
            />
          ))
        )
        :
        <h2>No projects</h2>
      }
    </>
  )
}