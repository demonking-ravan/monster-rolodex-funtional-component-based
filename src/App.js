import { useState, useEffect } from 'react'; 
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components'
import './App.css';


const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])
  
  useEffect( () => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => { 
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox 
        className='monster-search-box'
        placeholder='search monster'
        onChangeHandler={ onSearchChange }
      
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}






// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       'monsters': [],
//       'searchField': '',
//     };
//   };

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then( (response) => response.json())
//       .then( (users) => this.setState({ 'monsters': users }));
//   }

//   onSearchChange = (event) => { 
//     console.log(event);
//     const searchField = event.target.value.toLowerCase();

//     this.setState( () => {
//       return { searchField };
//     })
//   };


//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>

//         <SearchBox 
//           className='monster-search-box'
//           placeholder='search monster'
//           onChangeHandler={ this.onSearchChange }
        
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   };
// };

export default App;
