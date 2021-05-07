import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
  {
    title: 'What is React?',
    content: 'React is a Javascript framework'
  },
  {
    title: 'Why use react?',
    content: 'It makes frontend development fast and easy'
  },
  {
    title: 'How do you use React',
    content: 'By componentalising your app'
  }
]

const options = [
  {
    label: "The color red",
    value: "Red"
  },
  {
    label: "The color green",
    value: "Green"
  },
  {
    label: "The color blue",
    value: "Blue"
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);


  return(
  <div>
    <Header/>
    <Route path="/">
      <Accordion items={items}/>
    </Route>
    <Route path="/list">
      <SearchBar/>
    </Route>
    <Route path="/dropdown">
      <Dropdown label="Select a color:" selected={selected} onSelectedChange={setSelected} options={options}/>
    </Route>
    <Route path="/translate">
      <Translate/>
    </Route>
  </div>
  )
}

export default App;