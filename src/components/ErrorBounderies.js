import React, { Component } from "react";

class ErrorBoundery extends Component {
    constructor(props){
        super(props)
        this.state ={
            hasError : false
        }
    }
    componentDidCatch(error,info){
        this.state({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops. That is not good</h1>
        }else{
            return this.props.children
        }
    }
}
export default ErrorBoundery