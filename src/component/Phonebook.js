import React from 'react'

function Phonebook({ name, newName, setNewName, newNumber, setNewNumber }) {
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={e => name(e)}>
            <div>
                name: <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
            </div>
            <div>
                number: <input type="number" value={newNumber} onChange={e => setNewNumber(e.target.value)}></input>
            </div>
            <div>
                <button onClick = {name} type="submit">add</button>
            </div>~
            </form>
        </div>
    )
}

export default Phonebook


