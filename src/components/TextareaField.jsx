import React from 'react'
import './TextareaField.css'
const TextareaField = (props) => {
    return (
        <div className="text-area-field-body">
            <textarea  className='text-area-field-input' type={props.type} placeholder={props.placeholder} 
                onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default TextareaField
