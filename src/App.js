import { useState } from "react";
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
    </div>
  );
}

export default App;
