import React, { Component } from 'react'

export class SearchBar extends Component {

constructor(props){
    super(props);
}

render() {
    const {isOnlyStock, toggleStock} = this.props;

    return (
    <div>
            <input type="text"
                placeholder='Search...'
            //    onChange={}
            />
            <br />
            {/** checkbox/radio 값을 가져올 떄 readOnly를 이용해서
             * 바뀌는 값을 출력하는 용도로 사용할 수 있다
             */}
            <input type="checkbox"
                checked={isOnlyStock} readOnly
                onClick={toggleStock}
            />
            <label htmlFor=""
                onClick={toggleStock} 
            >Only show products in stock</label>
    </div>
    )
}
}

export default SearchBar