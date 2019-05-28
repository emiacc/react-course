import React from 'react';

class ImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.getHeight);
  }

  getHeight = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    return <img ref={this.imageRef} src={this.props.src} alt={this.props.alt} width="400" />
  }
}

export default ImageItem;