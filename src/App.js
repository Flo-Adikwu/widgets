import React from 'react';
import Accordion from './components/Accordion';
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

const App = () => {
  return(
  <div>
    {/* <Accordion items={items}/> */}
    <SearchBar/>
  </div>
  )
}

export default App;