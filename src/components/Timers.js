import { Form } from "./Form"
import { TimerBox } from "./TimerBox"

export const Timers = ({timerList, removeTimer, setIdProductoToEdit, idProductToEdit, updateTimer}) => {
  return(
    <>
      {       
        timerList.length > 0 ? (
          timerList.map((timerItem) => (
            idProductToEdit === timerItem.id ?
              <Form
                key={timerItem.id}
                timerItem={timerItem}
                setIdProductoToEdit={setIdProductoToEdit}
                idProductToEdit={idProductToEdit}
                updateTimer={updateTimer}
              />
            :
              <TimerBox            
                timerItem={timerItem}
                key={timerItem.id}
                removeTimer={removeTimer}
                setIdProductoToEdit={setIdProductoToEdit}
              />
          ))
        )
        :
        <h2>No projects</h2>
      }
    </>
  )
}