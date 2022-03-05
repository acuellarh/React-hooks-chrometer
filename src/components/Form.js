import { useEffect, useState } from "react";

export const Form = ({
    setShowForm,
    addTimer,
    timerItem,
    setIdProductoToEdit,
    idProductToEdit,
    updateTimer
  }) => {

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

    switch (action) {
      case "create" :
        addTimer(timerInfo)
        handleReset()
        setShowForm(false) 
      break
      case "cancelCreate" :
        handleReset()
        setShowForm(false)   
      break
      case "update" :
        updateTimer(timerInfo)
        setIdProductoToEdit(false)
        handleReset()   
      break
      case "cancelUpdate" :
        setIdProductoToEdit(false)        
      handleReset()
      break
      default:
      console.log(`Sorry, we are out of ${action}.`);
    } 
  }

  useEffect(() => {
    if(timerItem){
      setTimerInfo(
        {
          title:timerItem.title,
          description:timerItem.description,
          id:idProductToEdit
        }
      )
    }    
  }, [timerItem]);

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
           id={ idProductToEdit ? "update": "create"}       
           onClick={e => handleSubmit(e)}  
          >
            { idProductToEdit ? "Update": "Create"}   
          </button>            
          <button
            className="col-6 btn btn-outline-danger rounded-0" 
            id={ idProductToEdit ? "cancelUpdate": "cancelCreate"}      
            onClick={e => handleSubmit(e)}         
          >
            Cancel
          </button>
        </div>             
      </form>
    </div>   
  )
}