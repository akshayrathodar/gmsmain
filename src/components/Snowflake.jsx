import React from 'react'
import './Snowflake.css'
import { snowflake1, snowflake2, snowflake3 } from "../res/icons";


const Snowflake = (props) => {
    const snowflakes = [snowflake1, snowflake2, snowflake3]
    const randomSnowflake = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    
    return (

        <div className='snowflake' id={`item${props.id}`} style={props.style}>
            {randomSnowflake}
        </div>
    )
}

export default Snowflake
