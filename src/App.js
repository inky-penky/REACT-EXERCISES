import React, { useState } from 'react'

import Search from './component/Search'

import Phonebook from './component/Phonebook'

import './App.css';


const generateId = () => Math.random().toString(36).substring(2, 6)


const App = () => {
  const [persons, setPersons] = useState([
    { id:1, name: 'Arto Hellas', number: '040-123456' },
    { id:2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id:3, name: 'Dan Abramov', number: '12-43-234345' },
    { id:4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')

  const addNewName = (e) => {
    e.preventDefault();

    if (persons.some(person =>  person.name.toLowerCase() === newName.trim().toLowerCase()
    )) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      return null
    }

    const newInput = {
      id:generateId(),
      name: newName,
      number: newNumber
    }
    setPersons([
      ...persons,
      newInput

    ])
    setNewName('')
    setNewNumber('')
  }

  const contactToShow = query.trim()? persons.filter(person => person.name.toLowerCase().indexOf(query.trim().toLowerCase()) > -1): persons
  
  const handleSetQuery = (arg) => setQuery(arg)

  return (
    <div>
      <Search  query={query} handleQuery={handleSetQuery}/>
      <Phonebook name={ addNewName }  newName={ newName } setNewName={ setNewName } newNumber={ newNumber } setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <p>
        {
        contactToShow.map(
          person => {
            
          return <p key={person.id}>{person.name} - {person.number}</p>
          }
        )
      }
       </p>
       
    </div>
  )
}
export default App;
