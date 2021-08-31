import useSound from 'use-sound';
import React, { useState } from 'react';
import {RangeStepInput} from 'react-range-step-input';


function Volume(props) {

  return (
    <div className='Volume-box'>
      <div style ={{display: 'inline-block'}} >Volume</div>
      <RangeStepInput 
        min={0} max={1}
        value={props.generalVolume} step={0.1}
        onChange={(e) => props.setGeneralVolume(e.target.value)}
      />
      <div className = 'Volume-value'>{props.generalVolume * 100}</div>
    </div>
  )
}

export default Volume;