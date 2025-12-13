import {useState} from 'react'
import './SearchItem.css'

const Search = ({searchItem}) => {
  const [text, setText] = useState('')
  const handleChange =(e)=>{
    e.preventDefault();
    const value = e.target.value
    setText(value)
    searchItem(value)
  }
  return (
    <form className='searchItemForm'  >
        <input 
          type="search" 
          value={text} 
          id='search'
          onChange={handleChange}
        />
    </form>
  )
}

export default Search