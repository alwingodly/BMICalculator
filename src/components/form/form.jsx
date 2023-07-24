import React from 'react'
import { useState } from 'react';
function Form(props) {
  const [weight , setweight] = useState('')
  const [height , setheight] = useState('')
  const inputWeight = ((e)=>{
  setweight(e.target.value)
  })
  const inputHeight = ((e)=>{
    setheight(e.target.value)
    })
  const handleSubmit = ((event)=>{
    event.preventDefault();
    props.onSubmit(weight , height)
    setweight('')
    setheight('')
  })
  return  (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Enter your weight in kg:</label>
        <input
          type="number"
          className="form-input"
          value={weight}
          onChange={inputWeight}
        />
        <label className="form-label">Enter your height in cm:</label>
        <input
          type="number"
          className="form-input"
          value={height}
          onChange={inputHeight}
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form
 