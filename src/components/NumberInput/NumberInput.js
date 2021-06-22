import React from 'react';


import "./NumberInput.scss"

const NumberInput = ({state, setState, min, max, name, step}) => {

    function formatNumber(number) {
        return number.toLocaleString("en-GB").replace(".")
    }  

    return(
        <div className="number-input">
            <input 
                type="number" 
                value={state} 
                min={min}
                max={max}
                step={step}
                onInput={e => {setState(e.target.value)}}
                />
        </div>
    )
}

export default NumberInput

