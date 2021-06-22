import React from 'react'

import "./RadioButtonInput.scss"

const RadioButtonInput = ({ setState }) => {

    return(
        <div className="radio-buttons">
            <fieldset name="cohabitantFieldset">
                <label htmlFor="cohabitantFieldset">Har du samboer?</label>

                <div className="radio-buttons--wrapper">
                    <input 
                        type="radio"
                        name="cohabitant"
                        value="true"
                        id="ja" 
                        onInput={e => {setState(e.target.value)}} />
		            <label className="radio-button--toggle_true" htmlFor="ja">Ja</label>

		            <input 
                        type="radio"
                        name="cohabitant"
                        value="false"
                        id="nei" 
                        onInput={e => {setState(e.target.value)}} />
		            <label className="radio-button--toggle_false" htmlFor="nei">Nei</label>
                </div>
            </fieldset>
        </div>
    )

}

export default RadioButtonInput