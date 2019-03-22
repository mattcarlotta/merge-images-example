import React, { Component, Fragment } from 'react';
import mergeImages from 'merge-images';

class AvatarFromServer extends Component {
  state = { src: '', err: '' };

  componentDidMount = () => {
    mergeImages([
      '../../images/head.png',
      '../../images/eyes.png',
      '../../images/mouth.png',
    ])
      .then(src => this.setState({ src }))
      .catch(err => this.setState({ err: err.toString() }));
  };

  render = () => (
    <Fragment>
      <h5>Avatar From Server</h5>
      <img src={this.state.src} alt="avatar.png" />
      {this.state.err && <p>{this.state.err} </p>}
    </Fragment>
  );
}

export default AvatarFromServer;
