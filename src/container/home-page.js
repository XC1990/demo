import React, { Component } from 'react';
import productActions from '../actions/products'
import RaisedButton from 'material-ui/RaisedButton'
import ProductGrid from '../components/product-grid/ProductGrid'
import ShoppingList from '../components/shopping-list/ShoppingList'
import './home-page.css';
import { connect } from 'react-redux';
class HomePage extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="HomePage">
        <div className="MainContainer">
          <div className="ProductContainer">
            <ProductGrid products={this.props.products} onProductSelect={this.props.onProductSelect} onProductDeselect={this.props.onProductDeselect} />
          </div>
          <div className="ShoppingListContainer" >
            <ShoppingList products={this.props.products} onProductDeselect={this.props.onProductDeselect}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    products: state.products.products
  }

};

const mapDispatchtoProps = dispatch => {
  return {
    onProductSelect: (product) => {
      dispatch(productActions.productSelected(product))
    },
    onProductDeselect: (product) => {

      dispatch(productActions.productDeselected(product))
    }
  }
};

export default connect(mapStatetoProps,mapDispatchtoProps)(HomePage);
