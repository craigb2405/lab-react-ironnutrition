// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

    const [searchInput, setSearchInput] = useState('')
    const handleSearch = e => {
        e.preventDefault()
        setSearchInput(e.target.value)
        props.filteredFood(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
   
    }

  return (
    <form>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleSearch} onSubmit={handleSubmit} />
    </form>
  );
}

export default Search;