import { useEffect, useState } from "react";
import { PlusIcon } from "./components/PlusIcon";
import { Timers } from "./components/Timers";
import { Title } from "./components/Title";
import initialList from "./Database/data.json"


function App() {

  const [timerList, setTimerList] = useState(initialList);

  return (
    <div className="container">
      <Title/>  
      <Timers
        timerList={timerList}  
      />  
      <PlusIcon/>  
    </div>
  );
}

export default App;
