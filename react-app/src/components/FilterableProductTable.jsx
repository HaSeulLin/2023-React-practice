// json의 data 들고오기
import ProductData from '../data/product.json'

// Component 연결하기
import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


// 1. 하향식으로 작성 (부모부터 작성)
// 2. 정적데이터를 이용해서 작성
// 3. state와 props 구분해서 작성

export class FilterableProductTable extends Component {

constructor(props){
    super(props);
    this.state = {
        seacrhText : "",
        isOnlyStock : false
    }
}

// toggle 메소드를 실행할 때마다
// this.state.isOnlyStock T/F 로 바꿈
toggleStock = () => {
    this.setState({isOnlyStock : !this.state.isOnlyStock})
    console.log("메소드 실행")
}

render() {
    console.log(ProductData);
    // isOnlyStock이 true일 때
    // ProductData의 stock이 true인 것만 배열로 만들어 출력
    const checkedProducts =
    ProductData.filter((product)=>product.stocked);

    return (
    <div>
        {/** 검색어, 체크박스에 관한 값 */}
        <SearchBar
            isOnlyStock={this.state.isOnlyStock}
            // props 값으로 메소드를 작성해서 전달 가능
            toggleStock={this.toggleStock}
        />
        {/** 가져온 데이터 값을 보여줄 공간 */}
        <ProductTable
        products={this.state.isOnlyStock ? checkedProducts : ProductData} />
    </div>
    )
}
}

export default FilterableProductTable