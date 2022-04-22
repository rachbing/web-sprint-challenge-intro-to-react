// Write your Character component here
import React from 'react';

const Character = (props) => {
    console.log("character props")
    console.log(props)
    return (
        <div className="character-wrapper">
            <h3>Name: {props.character.name}</h3>
        </div>
    )
}

export default Character;