import React from 'react';

import Character from "./Character";

const CharacterList = (props) => {
    return(
        <div>
            {props.characterData.map(character => {
                return <Character character={character} key={character.created} />
            })}
        </div>
    )
}

export default CharacterList;