import { useState } from "react";

export const Form = ({setShowForm, addTimer}) => {

  const initialTimerInfo = { title:"", description:"" }

  const [timerInfo, setTimerInfo] = useState(initialTimerInfo);

  const handleReset = () => {
    setTimerInfo(initialTimerInfo)
  }

  const handleChange = (event) => {
    setTimerInfo({...timerInfo, [event.target.name]: [event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let action = event.target.id 
    if (action==="create"){    
      addTimer(timerInfo)
      handleReset()
      setShowForm(false)     
    } else {     
      handleReset()
      setShowForm(false)        
    }
  }

  return (
    <div className="row d-flex justify-content-center mt-2">     
      <form
        onSubmit={handleSubmit}
        className="col-sm-5 col-md-3 mx-4 px-0 border gray-light-border p-2"
      >
        <div className="d-flex justify-content-center p-2 mb-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={timerInfo.title}
            onChange={handleChange}
            className="col-sm-5 col-md-12 border gray-light-border p-2"
          />
        </div>
        <div className="d-flex justify-content-center p-2 mb-2">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={timerInfo.description}
            onChange={handleChange}
            className="col-sm-5 col-md-12 border gray-light-border p-2"
          />
        </div>     
        <div className="mt-2 d-flex justify-content-center p-2">
          <button
           className="col-6 btn btn-outline-primary rounded-0"
           id="create"     
           onClick={e => handleSubmit(e)}  
          >
            Create
          </button>      
          <button
            className="col-6 btn btn-outline-danger rounded-0" 
            id="cancel"      
            onClick={e => handleSubmit(e)}         
          >
            Cancel
          </button>
        </div>             
      </form>
    </div>   
  )
}