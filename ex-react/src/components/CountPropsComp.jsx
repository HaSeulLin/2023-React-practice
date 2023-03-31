import React, {Component} from 'react';

export class CountPropsComp extends Component {
    constructor (props){
        super (props);
        this.state={
            count : 0
        }
    }
    render () {
        const {num} = this.props;
        const {count} = this.state;
        return (
            <div>
                <h1>CountPropsComp</h1>
                <h2>{count}</h2>
                <button
                    onClick={ () => {
                        this.setState({count : count+num});
                    }}
                >
                +{num}
                </button>
            </div>
        );
    }}

export default CountPropsComp;