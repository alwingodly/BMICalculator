import './App.css';
import './components/BMI-Score/BMI-Score.css';
import './components/form/form.css';
import { useState } from 'react';
import Form from './components/form/form';
import BMIScore from './components/BMI-Score/BMI-Score';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleFormSubmit = (weight, height) => {
    setWeight(weight);
    setHeight(height);
  };

  return (
    <div className="App">
      <h1 className="BMICalculator-heading">BMI Calculator ⚖️</h1>
      <Form onSubmit={handleFormSubmit} />
      <BMIScore weight={weight} height={height} />
    </div>
  );
}

export default App;
