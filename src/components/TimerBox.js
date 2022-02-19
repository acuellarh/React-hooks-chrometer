import { DeleteIcon } from "./DeleteIcon"
import { EditIcon } from "./EditIcon"



export const TimerBox = ({key, timerItem}) => {
  let {id, title, description} = timerItem
  return (
    <div className="row d-flex justify-content-center mt-4">     
      <div className="col-3 px-0 border gray-light-border">
        <h2 className="h5 px-3 pt-2 mb-0">{title}</h2>
        <p className="px-3 mt-0 gray-light-color mb-1">{description}</p>
        <div className="px-3">
          <p className="gray-dark-color fs-4 fw-bolder d-flex justify-content-center">01:31:00</p>
        </div>
        <div className="mb-3 d-flex flex-row-reverse mx-1">
          <DeleteIcon/>
          <EditIcon/>        
        </div>     
        <div className="d-grid gap-2">
          <button type="button" class="btn btn-outline-success rounded-0">Start</button>        
        </div>
      </div>
    </div>   
  )
}