import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiValue, setBmiValue] = useState('');

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="height-container">
        <label htmlFor="height-value">Please enter your height in cm:</label>
        <input 
        type="number" 
        id='height'
        height={height}
        />
      </div>


    </div>
  );
}

export default App;
