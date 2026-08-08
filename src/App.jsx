import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-white");
  const [isDisabled, setisDisabled] = useState(false)
  const [active, setActive] = useState("Submit")
  const [toggled, setToggled] = useState(false);

  const handleClick = async () => {
    setisDisabled(true);
    setActive("Loading...");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        setActive("Success!");
        setColor("bg-green-500")
    } catch (error) {
        setActive("Error!");
        setColor("bg-red-500")
    } finally {
        setisDisabled(false);
    }
};

  return (
    <div className='flex items-center justify-center h-screen bg-black'>
    <button
    className= {`toggle-btn h-[28px] w-[50px]  rounded-full ${toggled?'toggled':''}`}
    onClick={()=>setToggled(!toggled)}>
      
      <div className='thumb'></div>
    </button>


    <button
    disabled={isDisabled}
  className={`full-btn ${color}`}
    onClick={handleClick}
>
    {active}
</button>
    </div>
  )
}

export default App
