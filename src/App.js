import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import Search from './component/Search'

import Phonebook from './component/Phonebook'

import './App.css';


const generateId = () => Math.random().toString(36).substring(2, 6)


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
   Axios.get('http://localhost:3030/persons')
        .then(response => setPersons(response.data))
        .catch(console.log)
   
  },[])
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
