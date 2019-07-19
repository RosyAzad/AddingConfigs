import React, { Component } from 'react';
import Compose from './Compose'

class Service extends Component{
    constructor(props){
        super(props)
        this.state= {
            services: [],
            listDataFromChild: null
        }
        this.handleAddService = this.handleAddService.bind(this)
        this.myCallback = this.myCallback.bind(this)
    }

    handleAddService(){
        this.setState({services: [...this.state.services, ""]})
    }

    myCallback(dataFromChild, index){
        this.setState({ listDataFromChild: dataFromChild });
        console.log("child to parent data" + this.state.listDataFromChild);
    }

    render(){
        return(
            <div>
                {this.state.services.map((service, index) => {
                    return(
                    <Compose callbackFromParent={this.myCallback} key = {index} id= {index}></Compose>
                    )
                })}
                
                <button onClick={this.handleAddService}>Add Service</button>
            </div>
        )
    }
}

export default Service;