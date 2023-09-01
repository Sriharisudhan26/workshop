import React, { Component } from 'react'

export class LifecycleComponent extends Component {

    constructor(props){
        super(props)
        
            this.state ={
                name: ""
            }
            console.log("constructor is Updated")

        
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedstate is Updated")
        return{
            name: props.name
        }
    }
    componentDidMount(){
        console.log("component is updated")
    
        }
        console.log("component is updated")
    }