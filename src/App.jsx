
import { useState } from 'react';
import './App.css';
import module from "./styles.module.css"

function App() {
  const [contor, setContor] = useState(0);
  const[color, setColor] = useState("#ffffff");


  const [tempC, setnewTemp] = useState(0);
  const [tempF, setGrade] = useState(0);



  function FahrenheitToCelsius(fahrenheit){
    const gradeCelsius = (fahrenheit - 32 )/ 1.8;
    return gradeCelsius;
  }



  function handleTemperatureChange(event){
    const newTemperature = +event.target.value;
    setnewTemp(newTemperature);   
    setGrade(celsiusToFahrenheit(newTemperature));
    
    
  }

  function handleTemperatureFahrenheitChange(event){
    const newTemp = +event.target.value;
    setGrade(newTemp);   
    setnewTemp(FahrenheitToCelsius(newTemp)); 
    
  }

  function celsiusToFahrenheit(celsius){

    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }

  function handleChangeColor(event){
    const newColor = event.target.value;
    setColor(newColor);
  }
  function handleClick(){
    setContor(contor + 1);
  }
  


  

  return (
    <div className="App" style={{backgroundColor: color}}>
     <h1 className={module.title}>useState()</h1>
     
     <button className={module.content} onClick={handleClick}>Contor {contor}</button>
     <label >Temperatura in Celsius</label>
     <input type="number" value={tempC} onChange ={handleTemperatureChange} />

     <label>Temperatura in Fahrenheit</label>
     <input type="number" value={tempF} onChange={handleTemperatureFahrenheitChange}/>

     
     <input  className={module.content} type="color"value={color} onChange = {handleChangeColor}/>

     

     
     
     
    </div>
  )
}

export default App
