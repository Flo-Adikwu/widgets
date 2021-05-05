import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';

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
    {/* <Accordion items={items}/> */}
    {/* <SearchBar/> */}
    <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
  </div>
  )
}

export default App;