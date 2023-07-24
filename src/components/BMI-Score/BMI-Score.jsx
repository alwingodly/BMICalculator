import React from 'react'

function BMIScore(props) {
   
    let weight = props.weight
    let height = props.height/100
    const BMIvalue = weight/(height * height)
    const overToNormal = weight - ((height * height)*24.)
    const lossToNormal = ((height * height)*18.6) - weight
  return (
    <div className={BMIvalue ? "bmi-score-container" : "cut"}>
     <h1 className='yourBMI'>Your BMI: {BMIvalue.toFixed(2)}</h1>
     <h2 className="bmi-message">
        {BMIvalue < 18.6 && (
          <span className="underweight">
            You are Underweight and need to gain 🤒: <span className='correct' >{ lossToNormal.toFixed(2)} kg</span> 
          </span>
        )}

        {BMIvalue >= 18.5 && BMIvalue < 24.9 && (
          <span className="normal">You are Normal ✌️</span>
        )}

        {BMIvalue > 24.9 && BMIvalue < 29.9 && (
          <span className="overweight">
            You are Overweight and need to lose 😥: <span className='correct'>{ overToNormal.toFixed(2)} kg</span> 
          </span>
        )}

        {BMIvalue > 30 && BMIvalue < 34.9 && (
          <span className="obese-1">
            You are Overweight and have Obesity Class I 😥, You need to lose:
            <span className='correct'  >{ overToNormal.toFixed(2)} kg</span> 
          </span>
        )}

        {BMIvalue > 35 && BMIvalue < 39.9 && (
          <span className="obese-2">
            You are Overweight and have Obesity Class II 😥, You need to lose: <span className='correct'  >{overToNormal.toFixed(2)} kg</span> 
          </span>
        )}

        {BMIvalue > 40 && (
          <span className="obese-3">
            You are Overweight and have Obesity Class III 😥, You need to lose:
            <span className='correct'  >{ overToNormal.toFixed(2)} kg</span> 
          </span>
        )}
      </h2>
      <table className="bmi-table">
        <thead>
          <tr>
            <th>Classification</th>
            <th>BMI range (kg/m²)</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Thinness</td>
            <td> &lt; 18</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>18.5 - 25</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>25 - 30</td>
          </tr>
          <tr>
            <td>Obese Class I</td>
            <td>30 - 35</td>
          </tr>
          <tr>
            <td>Obese Class II</td>
            <td>35 - 40</td>
          </tr>
          <tr>
            <td>Obese Class III</td>
            <td>&gt; 40</td>
          </tr>
        </tbody>
      </table>
    </div>

    
  );
} 

export default BMIScore
