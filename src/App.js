import React, { useState } from 'react'
import './App.css';


export const generateId = () => Math.random().toString(36).substring(2, 6)


const App = () => {
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (e) => {
    e.preventDefault();

    if (Object.keys(persons).some(personId => {
      const person = persons[personId]
      return person.name.toLowerCase() === newName.trim().toLowerCase()
    })) {
      setNewName('')
      return window.alert(`${newName} is already added to phonebook`)

    }

    const newInput = {}
    newInput[generateId()] = {
      name: newName
    }
    setPersons({
      ...persons,
      ...newInput

    })
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => addNewName(e)}>
        <div>
          name: <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type="number" value={newNumber} onChange={e => setNewNumber(e.target.value)}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{
        Object.keys(persons).map(
          personId => {
            const person = persons[personId]
            return <p key={personId}>{person.name}</p>
          }
        )
      }
      </p>
    </div>
  )
}

export default App
