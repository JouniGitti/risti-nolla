import { useState } from 'react';

export default function Player({ initialName, symbol, isActivePlayer, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing){
            onNameChange(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
    }

    return(
        <li className={isActivePlayer ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Tallenna nimi' : 'Muokkaa nimeä'}</button>
          </li>
    );
};
