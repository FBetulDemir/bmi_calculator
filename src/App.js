import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiValue, setBmiValue] = useState('');
  const [resultText, setResultText] = useState('');

  const Calculate = () => {
    if (height && weight){
      const heightInMeters = height/100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) { 
          message = 'You are Underweight'; 
      } else if (bmi >= 18.5 && bmi < 25) { 
          message = 'You are Normal weight'; 
      } else if (bmi >= 25 && bmi < 30) { 
          message = 'You are Overweight'; 
      } else { 
          message = 'You are Obese'; 
      }
      
      setResultText(message); 
        } else { 
            setBmiValue(''); 
            setResultText(''); 
        } 
    }

  }

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="height-container">
        <label htmlFor="height-value">Please enter your height in cm:</label>
        <input 
          type="number" 
          id='height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="weight-container">
        <label htmlFor="weight-value">Please enter your weight in kg:</label>
        <input 
          type="number" 
          id='weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <Button variant="secondary">Calculate</Button>{' '}
    </div>
  );
}

export default App;
