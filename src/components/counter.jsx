import React, { Component } from 'react';

class Counter extends Component {
    state={
        value:this.props.value,
        tags:['tag1','tag2','tag3'],
        
    };

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    handleIncrement=e =>{
        console.log(e);
        this.setState({value:this.state.value+1});
    };

    render() { 
        
        let classes = this.getBadgeClasses();
        console.log(this.props);

        return ( <React.Fragment>
        
            <span className={this.getBadgeClasses()}>
            {this.formatCount()}
            </span>
            <button onClick={()=> this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
            <button className="btn btn-danger btn-sm m-2">Delete</button>

            </React.Fragment>
        
        );
        }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count}=this.state;
        return count===0 ? 'Zero' : this.state.value;
    }
}
 
export default Counter;