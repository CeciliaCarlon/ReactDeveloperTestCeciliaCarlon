import React from "react";

class ProductAttributes extends React.Component {
  handleClick(e) {
    console.log(e);
  }
  render() {
    let semiDescription = this.state.Product.description.replace("<p>", "");
    let finalDescription = semiDescription.replace("</p>", "");
    return (
      <div>
        <p className="makeBold fontSize30">{this.props.Product.brand}</p>
        <p className="fontSize30">{this.props.Product.name}</p>
        <div>
          <p className="makeBold fontRoboto">
            {this.props.Product.attributes[0].name}:
          </p>
          <div className="divDisplayValue">
            {this.props.Product.attributes[0].items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="displayValue"
                  onClick={this.handleClick}
                >
                  <p className="margin0">{item.displayValue}</p>
                </div>
              );
            })}
          </div>
        </div>
        <p className="fontRoboto">Price:</p>
        <p className="makeBold fontSize24">$144.69</p>
        <button className="btnAddToCart">ADD TO THE CART</button>
        <p>{finalDescription}</p>
      </div>
    );
  }
}

export default ProductAttributes;
