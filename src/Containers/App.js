import react from "react";
import Cardlist from "../Components/Cardlist";
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";


class App extends react.Component { 
    constructor() {
        super()
        this.state = {
           robots: [],
           searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }
        
        
     


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const { robots,searchfield } = this.state;
        const filteredRobots =  robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
       return robots.lenght ?
          <h1>Loading, please wait.</h1> :
        (
        <div className='tc'>
           <h1 className="f1">RoboFriend</h1>
           <Searchbox searchChange={this.onSearchChange}/>
           <Scroll>
             <ErrorBoundry>
               <Cardlist robots={filteredRobots}/>
             </ErrorBoundry>
           </Scroll>
        </div>
             );
         }
    }

export default App;