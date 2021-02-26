import React from "react";
import { PropTypes } from "prop-types";
import Product from "./Product";

import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProducts: false,
    };
  }

  makeProductsVisible() {
    this.setState({ showProducts: true });
  }

  render() {
    const { cover, title, description, products } = this.props;
    const { showProducts } = this.state;

    return (
      <main className="Body">
        <img src={cover} alt={title} />
        <div className="content">
          <h1 className="Body-title">{title}</h1>
          <h2 className="Body-description">{description}</h2>
          <div className="products-container">
            {showProducts ? (
              products.map((product) => {
                return <li>{<Product image={product.image} title={product.title}  />}</li>;
              })
            ) : (
              <button onClick={() => this.makeProductsVisible()}>
                Show products
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }
}

Body.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default Body;