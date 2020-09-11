import React, { Component } from 'react';
import './counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock'
import ClockFunctional from './ClockFunctional';
import Step from './Step';

// -----------Komponent Klasowy------------
// class Counter extends Component {
//     render () {
//         let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);

//         return (
//             <div className="counter">
//                 Counter:
//                 <span className="value">
//                     {this.props.initValue}

//                 </span>

//             </div>
//         );
//     }
// }

// export default Counter;

// -----Komponent Funkcyjny-----
// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1 ) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}

//             </span>

//         </div>
//     )
// }

// export default Counter;

// -------Stany Komponentów klasowych-------
class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1

        };
    }

    changeValue = (action) => {

        console.log(action);
        

        this.setState ((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
            currentCounterValue += this.state.stepValue;
        
            } else if (action === 'reinit') {
            currentCounterValue = prevProps.initValue;
            } else {
            currentCounterValue = 0;
            }
            
            return ({
                counterValue: currentCounterValue
            });
        });
    
        // counterValue: this.state.counterValue + 1
    }

    setStepValue = (event) => {

        this.setState({stepValue: parseInt(event.target.value) })

        console.log(typeof event.target.value)

    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        });
    };


    render() {

        let clockElement = '';
        if (this.state.showClock) {
            // clockElement = <Clock toggleClockMethod={this.toggleClock} />
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />
        } else {
            clockElement = <span onClick={this.toggleClock} className='show-clock'>show clock </span>
        }

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue}/>

                <ButtonsPanel buttonMethod={this.changeValue} currentStepValue={this.state.stepValue} />

                <Step setStep={this.setStepValue} currentStepValue={this.state.stepValue}/>

                {/* <Clock /> */}
                {clockElement}


            </div>
        );
    }
};

export default Counter;
