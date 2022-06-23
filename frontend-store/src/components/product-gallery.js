import React from "react";

class ProductGallery extends React.Component {
  render() {
    console.log(this.props.Product);
    return (
      <div className="divOneProductImage">
        <div className="divGalleryProduct">
          {this.props.Product.gallery.map((image, index) => {
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
        <img className="oneProductImage" src={this.props.Product.gallery[0]} />
      </div>
    );
  }
}

export default ProductGallery;
