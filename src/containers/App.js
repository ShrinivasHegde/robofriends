import React, { useState,useEffect } from "react";
import CardList from "../components/cardList";
//import { robots } from "../robots";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll.js'
import ErrorBoundery from "../components/ErrorBounderies";
import './app.css'


function App (){
    const [robots,setRobots] = useState([])
    const [searchfield,setSearchfield] = useState('')
    
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> setRobots(users))
    },[])
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users=> this.setState({ robots : users }))
    // }
    
    const onSearchChange =(event)=>{
        //console.log(event.target.value)
        setSearchfield (event.target.value)
        //console.log(this.state.searchfield)
        
    }
    
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
                    <SearchBox searchChange = {onSearchChange}/><br/>
                    <Scroll>
                        <ErrorBoundery>
                            <CardList robots = {filterRobots}/>
                        </ErrorBoundery>
                    </Scroll>
                </div>
            )
        }
        
       
    
    
    
}

export default App

