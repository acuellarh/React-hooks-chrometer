import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { PlusIcon } from "./components/PlusIcon";
import { Timers } from "./components/Timers";
import { Title } from "./components/Title";
import initialList from "./Database/data.json"


function App() {

  const [timerList, setTimerList] = useState(initialList);
  const [showForm, setShowForm] = useState(false);

  const addTimer = (timerInfo) => {
    let newTimerInfo = timerInfo
    newTimerInfo.id = Date.now()
    setTimerList([...timerList, timerInfo])
  }

  return (
    <div className="container">
      <Title/>  
      <Timers
        timerList={timerList}  
      />  
      {
        showForm ?
        <Form
          setShowForm={setShowForm}
          addTimer={addTimer}
        />      
        :
        <PlusIcon
          setShowForm={setShowForm}
        />  
      }
    </div>
  );
}

export default App;
