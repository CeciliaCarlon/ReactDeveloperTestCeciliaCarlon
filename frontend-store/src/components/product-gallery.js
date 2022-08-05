import React from "react";

class ProductGallery extends React.Component {
  render() {
    return (
      <div className="divOneProductImage">
        <div className="divGalleryProduct">
          {this.props.Product.product.gallery.map((image, index) => {
            return (
              <img
                key={index}
                className="miniProductImage"
                src={image}
                alt=""
              />
            );
          })}
        </div>
        <img
          className="oneProductImage"
          src={this.props.Product.product.gallery[0]}
        />
      </div>
    );
  }
}

export default ProductGallery;
