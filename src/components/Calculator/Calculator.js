import React, { useEffect, useState } from 'react'
import RadioButtonInput from '../RadioButtonInput/RadioButtonInput'

import RangeInput from '../RangeInput/RangeInput'

import "./Calculator.scss"
/* TODO - FIX FOR MOZILLA */
const Calculator = () => {
    const [monthlyIncome, setMonthlyIncome] = useState(5000)
    const [qtyChildren, setQtyChildren] = useState("-")
    const [cohabitant, setCohabitant] = useState(null)
    const  [statesArray, setStatesArray] = useState({
        monthlyIncome,
        cohabitant,
        qtyChildren,
    })
    
    useEffect(() => {
        setStatesArray({
            ...statesArray,
            monthlyIncome,
            cohabitant,
            qtyChildren,
        })
    },[monthlyIncome, qtyChildren, cohabitant])
    console.log(monthlyIncome)
    /* console.log(qtyChildren) */
    return (
        <form className="calculator">
            <RangeInput
                state={monthlyIncome}
                setState={setMonthlyIncome}
                min={5000}
                max={100000}
                startOfRange="5 000 NOK"
                endOfRange="100 000 NOK"
                suffix="NOK"
                title="Hvor mye får du utbetalt i lønn per måned?"
                step={1000}
                name="monthly-income" />

            <RadioButtonInput setState={setCohabitant} />

            <RangeInput 
                state={qtyChildren} 
                setState={setQtyChildren}
                min={0}
                max={4}
                startOfRange="Ingen Barn"
                endOfRange="4 Barn"
                suffix="Barn"
                title="Har du barn?"
                name="number-of-children" />
        </form>
      );

}

export default Calculator