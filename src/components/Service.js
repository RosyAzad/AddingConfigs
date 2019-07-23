import React, { Component } from 'react';
import Compose from './Compose'

class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: [""],
            collectionName: ""
        }
        this.handleAddService = this.handleAddService.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.myCallback = this.myCallback.bind(this)
    }

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    handleSubmit() {
        this.state.services.forEach((service,index) => {
            if(service.serviceName == ""){
                alert(`Please provide service name for service at index ${index}`)
            }
        });
        //converting state to json array
        var finalServiceState = {}       
        finalServiceState.services = this.state.services
        //finalServiceState.collectionName = this.name.collectionName
        //finalServiceState = this.state.services
        console.log("final service state: " + finalServiceState.services[0].serviceName);

    }

    handleAddService() {
        this.setState({ services: [...this.state.services, ""] })
    }

    myCallback(dataFromChild, index) {
        this.setState({ listDataFromChild: dataFromChild });
        //this.setFinalState()
        console.log("child to parent data" + this.state.listDataFromChild);

        if (this.state.services[index] == "") {
            this.state.services[index] = {}
        }
        this.state.services[index] = dataFromChild
        this.setState({ services: this.state.services })
        // if(this.state.services[index] != null && this.state.services[index].serviceName != ""){
        //     console.log("service name in parent:" + this.state.services[index].serviceName)
        // }
    }

    render() {
        return (
            <div>
                <label> <br></br>
                    <span style={this.styles} className="badge badge-primary m-2">Collection(Team) name :</span>
                    <input type="text" name="name" />
                </label>
                {this.state.services.map((service, index) => {
                    return (
                        <Compose callbackFromParent={this.myCallback} key={index} id={index}></Compose>
                    )
                })}

                <button onClick={this.handleAddService}>Add Service</button>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Service;