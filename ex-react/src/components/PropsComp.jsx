import React, {Component} from 'react';

export class PropsComp extends Component {
    render () {
        const {color, children} = this.props;
        return (
            <div style={{color: color}}>
                <h1>{children}</h1>
            </div>
        );
    }}

export default PropsComp;