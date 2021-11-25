import React from 'react'
import './Snow.css'
import Snowflake from './Snowflake';

const Snow = () => {
    const snow = () => {
        let animationDelay = "0s";
        let arr = Array.from("1234567890");
        return arr.map((el, i) => {
          animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
          return <Snowflake key={i} id={i} style={{ animationDelay }} />;
        });
      };

    return (
        <div className="snow">{snow()}</div>
    )
}

export default Snow
