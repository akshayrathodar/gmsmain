import React from 'react'
import './InputField.css'
const InputField = (props) => {
    return (
        <div className="input-field-body" style={{width: props.state === 'long' ? '100%' : '345px'}}>
            <input  className='input-field-input' type={props.type} placeholder={props.placeholder} 
                onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default InputField
