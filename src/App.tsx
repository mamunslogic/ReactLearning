import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  const personName = {
    first: 'Abdur',
    last: 'Rashid'
  }

  const nameList = [
    {
      first: 'Abdur',
      last: 'Rashid'
    },
    {
      first: 'Nabiha',
      last: 'Tahsin'
    },
    {
      first: 'Ahona',
      last: 'Apa'
    },
  ]

  return (
    <div className="App">
      <Greet name='Mamun' messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status='success' />
      <Heading>Heading Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Smith</Heading>
      </Oscar>
      <Greet name='Mukul' isLoggedIn={false} />

      <Button handleClick={
        (event, id) => {
          console.log('Button Clicked', event, id)
        }} />

      <Input value='' handleChange={(event) => console.log(event)} />

      <Container styles={{ border: '1px solid black', padding: '1rem'}} />
    </div>
  );
}

export default App;
