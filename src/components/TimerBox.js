import { DeleteIcon } from "./DeleteIcon"
import { EditIcon } from "./EditIcon"
import {formatTime} from "../utils/formatTime"
import { useEffect, useState } from "react";


export const TimerBox = ({timerItem, removeTimer}) => {
  let {id, title, description} = timerItem
  const [timer, setTimer] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  
  useEffect(() => {
    let interval = null;
    if (timerStart){
      interval = setInterval (()=>{
      setTimer(prevTimer => prevTimer + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)    
  }, [timerStart]); 


  return (
    <div className="row d-flex justify-content-center mt-2">     
      <div className="col-5 col-sm-5 col-md-3 mx-4 px-0 border gray-light-border">
        <h2 className="h5 px-3 pt-2 mb-0">{title}</h2>
        <p className="px-3 mt-0 gray-light-color mb-1">{description}</p>
        <div className="px-3">
          <p className="gray-dark-color fs-4 fw-bolder d-flex justify-content-center m-0">{formatTime(timer)}</p>
        </div>
        <div className="mb-1 d-flex flex-row-reverse mx-1">
          <DeleteIcon  
            removeTimer={removeTimer}
            id={id}
          />
          <EditIcon/>        
        </div>     
        <div className="d-grid gap-2">
           {
            timerStart ? 

            <button
            type="button"
            className="btn btn-outline-danger rounded-0"
            onClick={() => setTimerStart(false)}
            >
              Stop
            </button> 
            :
              <button
              type="button"
              className="btn btn-outline-success rounded-0"
              onClick={() => setTimerStart(true)}
              >
                Start
              </button> 
              
        
           }       
        </div>
      </div>
    </div>   
  )
}