import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'


// 필터링된 값을 테이블로 출력
export class ProductTable extends Component {

// props 값 가져오기
constructor(props){
    super(props);
}

render() {
    const {products} = this.props;

    // products 배열에 있는 객체 중에서 Sporting Goods 값을 가진 객체 배열
    const sportingProducts = products.filter(
//        (product)=>product.name.includes("ball"));
        (product)=>product.category === "Sporting Goods");

    // Electronics 값을 가진 배열
    const electroProducts = products.filter(
        (product)=>product.category === "Electronics");

    return (
    <div>
        <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>

            {/** products 배열로 하나씩 불러오기 > 번거로움
            <ProductRow name={products[0].name} price={products[0].price}/>
             */}
            {/* map으로 products 전체 불러오기
                products.map(
                    (product)=>(
                    <ProductRow
                        name={product.name}
                        price={product.price}
                    />)
                )
            */}
            <ProductCategoryRow category="Sporting Goods"/>
            {
                // products의 category 중 'Sporting Goods'
                // 를 가진 배열을 만드는 방법
                // filter 사용해 내용을 작성하고
                // <ProductRow /> 통해서 내용 출력하기
                sportingProducts.map((product, index)=>(
                    <ProductRow
                        key={index}
                        name={product.name}
                        price={product.price}
                    />)
            )}
            <ProductCategoryRow category="Electronics"/>
            {
                // products의 category 중 'Electronics' 배열 출력
                electroProducts.map((product, index)=>(
                    <ProductRow
                        key={index}
                        name={product.name}
                        price={product.price}
                    />)
            )}
        </tbody>
        </table>
    </div>
    );
}
}

export default ProductTable