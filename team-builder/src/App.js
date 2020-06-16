import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import TeamMember from './TeamMember';
import Form from './Form';

const initialTeamMemberList = [
  {
    id: uuid(),
    name: 'Vick',
    email: 'vick@vick.com',
    role: 'Project Manager',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMemberList)
  const [err, setErr ] = useState('')

  const [formValues, setFormValues] = useState(initialFormValues)


  const onInputChange = evt => {
    const { name, value } = evt.target

    setFormValues({
      ...formValues,
      [name]: value,
    })

  }

  const onSubmit = evt => {
    evt.preventDefault()

    if(!formValues.name || !formValues.email || !formValues.role) {
      setErr('Please fill out required fields')
      return
    }

    const newTeamMember = { ...formValues, id: uuid() }

    setTeamMembers(teamMembers => [newTeamMember, ...teamMembers])

    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <span style={{ color: 'red' }}>{err}</span>
      </header>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  );
}

export default App;
