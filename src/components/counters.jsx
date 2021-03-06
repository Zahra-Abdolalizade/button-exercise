import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters:[
            {id:1,value:10},
            {id:1,value:0},
            {id:1,value:0},
            {id:1,value:0}
        ]
     };
    render() { 
        return (
        <div>
            {this.state.counters.map(counter=>
            <Counter key={counter.id} value={counter.value}>
            </Counter>
            )}
            
        </div>
        );
    }
}
 
export default Counters;