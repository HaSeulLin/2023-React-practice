import React, {Component} from 'react';

export class CountComp extends Component {
    constructor (props){
        super (props);
        this.state={
            number : 0
        }
    }
    render() {
        const {number} = this.state;
        return (
            <div>
                <h1>CountComp</h1>
                <h2>number : {number}</h2>
                <button
                    onClick={ () => {
                        this.setState({number : number+10});
                    }}
                >
                +10
                </button>
            </div>
        );
    }
}


export default CountComp;