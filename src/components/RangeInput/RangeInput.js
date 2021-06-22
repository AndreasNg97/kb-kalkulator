import React, { useState, useRef, useEffect } from 'react' 
import classNames from 'classnames'

import "./RangeInput.scss"
import NumberInput from '../NumberInput/NumberInput'

const RangeInput = ({
        state, 
        setState, 
        min, 
        max, 
        startOfRange, 
        endOfRange, 
        suffix, 
        title, 
        name, 
        step, }) => {
    const [rangeProgression, setRangeProgression] = useState(0)
    const inputRef = useRef(null)
    
    const inputValueClassNames = classNames('calculator--input-value', {
        'calculator--input-value--selected': state > 0,
    })
    
    let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    function precentageOf(min, max, value) {
        let precentage = Math.ceil(((value - min) * 100) / (max - min));    
        return precentage
    }

    function formatNumber(number) {
        return number.toLocaleString("en-GB").replace(",", " ")
    }   

    useEffect(() => {
        console.log(inputRef)
    },[])
    
    return(
        <div className="calculator--input-wrapper">
            <label htmlFor={name}>{title}</label>
                
                <div className={inputValueClassNames}>
                    <NumberInput state={state} setState={setState} name={name} min={min} max={max} step={step/2}/>
                    <p>{suffix}</p>
                </div>
                <div className="calculator--input--range-group--wrapper">
                    <div className="calculator--input--range-input--wrapper" style={isFirefox ? {} : {border: "1px solid #ec583b"}}> 
                        <input
                        ref={inputRef} 
                        name={name}
                        min={min}
                        max={max}
                        defaultValue={min}
                        type="range"
                        step={step}
                        onInput={e => {
                            if(isFirefox){
                                setState(parseInt(e.target.value))
                            } else {
                                setState(parseInt(e.target.value))
                                setRangeProgression(precentageOf(min, max, e.target.value))
                            }
                        }}
                        style={isFirefox ? {} : {
                            backgroundColor: "transparent",
                            background: `linear-gradient(
                                90deg,
                                rgba(236, 88, 59, 1) 0%,
                                rgba(236, 88, 59, 1) ${rangeProgression}%,
                                rgba(255, 255, 255, 1) ${rangeProgression}%
                                )`,
                            }}/>
                    </div>
                    <p>{startOfRange}</p>
                    <p>{endOfRange}</p>
                </div>
            </div>
    )
}

export default RangeInput