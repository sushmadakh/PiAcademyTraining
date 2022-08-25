import React, { Component } from "react";
import Link from "next/link"

type Numbers = {
    counter : number;
}

type Result = {
    number : number;
}


class Home extends Component<Numbers,Result> {
    state: Result = {
        number: 0,
      };
      // instance properties
      message:string="success"
      componentDidMount() {
        this.updateState1();
      }
     
    updateState1=()=>{
        this.setState((state) => ({
            number: state.number + this.props.counter,
          }));
    }
      
    render() {
        return (
            <div>
                Hello World {this.props.counter} - {this.state.number}
                <div> {this.message} </div>
            </div>
        );
    }
}

export default Home;