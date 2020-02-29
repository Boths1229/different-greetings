import React, { Component } from 'react';
import Languages from './Languages';

class Greetings extends Component {
    constructor(props) {
        super(props)
        this.state = {
          greeting: 'Goodmorning is the English greeting'
        }
        this.handleGreeting = this.handleGreeting.bind(this);
    }
    handleGreeting(newGreeting) {
        this.setState({
            greeting: newGreeting
        })
    }
    render () {
        return (
         <div>
          <Languages greeting={this.state.greeting} onChange={this.handleGreeting} />
          </div>
        )
    }
}

export default Greetings;