import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { PlusIcon } from "./components/PlusIcon";
import { Timers } from "./components/Timers";
import { Title } from "./components/Title";
import initialList from "./Database/data.json"


function App() {

  const [timerList, setTimerList] = useState(initialList);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <Title/>  
      <Timers
        timerList={timerList}  
      />  
      <PlusIcon/>  
      <Form/>      
    </div>
  );
}

export default App;
