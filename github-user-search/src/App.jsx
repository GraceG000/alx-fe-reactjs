import React from 'react';  
import Search from './components/Search';

const App = () => {
  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GitHub User Search</h1>
      <p>Search for GitHub users and view their profiles.</p>
      <Search />
    </div>
  )
}
export default App;