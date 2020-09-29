import React, { useState } from 'react'
import './App.css';


export const generateId = () => Math.random().toString(36).substring(2, 6)


const App = () => {
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: generateId() } // you should put id in every contact info!
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (e) => {
    e.preventDefault();

    if (persons.some(person => person.name.toLowerCase().indexOf(newName.trim().toLowerCase()) === -1) {
      setNewName('')
      window.alert(`${newName} is already added to phonebook`)
    } // 1. you initialized persons in your useState as an array and you're treating it as if it's an object!
      // 2. Never say `return`! you either say `return something` or `return null`

//     const newInput = {}
//     newInput[generateId()] = {
//       name: newName
//     }
//     setPersons({
//       ...persons,
//       ...newInput

//     })
    // code above is wrong as well!!! please understand your code. Don't just copy and paste the class work!
    setPersons(persons => persons.concat({
      id: generateId(),
      name: newName
    }))
  
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
      {
        persons.map(person => <p key={personId}>{person.name}</p>)
      }
    </div>
  )
}

export default App
