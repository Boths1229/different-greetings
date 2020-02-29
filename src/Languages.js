import React, { Component } from 'react';

class Languages extends Component {
    constructor (props) {
        super(props)
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const newGreeting = e.target.value;
        this.props.onChange(newGreeting)
    }
    render () {
        return (
           <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
               <div className='tc'>
               <h2 className='f1'>{this.props.greeting} in the morning.</h2>
               <p>Check the options below to see other greetings of other languages</p>
               <select id='greetings' onChange={this.handleChange} className='pa3 ba b--green bg-lightest-blue' >
                   <option value='Goodmorning is the English greeting'>
                       English
                   </option>
                   <option value='Eka arooo is the Yoruba greeting'>
                       Yoruba
                   </option>
                   <option value='Iboolachi is the Igbo greeting'>
                       Igbo
                   </option>
                   <option value='barka da safiya is the Hausa greeting'>
                       Hausa
                   </option>
                   <option value='Bonjour is the French greeting'>
                       French
                   </option>
                   <option value='Buenos días is the Spanish greeting'>
                       Spanish
                   </option>
                   <option value='guten Morgen is the German greeting'>
                       German
                   </option>
               </select>
               </div>
           </div>
        )
    }
};

export default Languages;