import React, { Component } from "react";
import CardList from "../components/cardList";
//import { robots } from "../robots";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll.js'
import './app.css'


class App extends Component {
    constructor (){
        super()
        this.state={
            robots : [],
            searchfield : ''

        }
        
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({ robots : users }))
    }
    
    onSearchChange =(event)=>{
        //console.log(event.target.value)
        this.setState ({searchfield: event.target.value})
        //console.log(this.state.searchfield)
        
    }
    render(){
        const {robots, searchfield} = this.state
        const filterRobots = robots.filter(robot =>{
            
            //console.log(this.state.searchfield); //Do you get your expected value here?
            //const value = 
             
             console.log(robot.name.toLowerCase().includes(searchfield.toLowerCase())) // Its returning everything True Thats why I am getting All robots
             return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return(
                //console.log(filetrRobots)
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/><br/>
                    <Scroll>
                        <CardList robots = {filterRobots}/>
                    </Scroll>
                </div>
            )
        }
        
       
    }
    
    
}

export default App

