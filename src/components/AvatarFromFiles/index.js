import React, { Component, Fragment } from 'react';
import mergeImages from 'merge-images';
import head from '../../images/head1.png';
import eyes from '../../images/eyes1.png';
import mouth from '../../images/mouth1.png';

class AvatarFromFiles extends Component {
  state = { src: '', err: '' };

  componentDidMount = () => {
    mergeImages([head, eyes, mouth])
      .then(src => this.setState({ src }))
      .catch(err => this.setState({ err: err.toString() }));
  };

  render = () => (
    <Fragment>
      <h5>Avatar From Files</h5>
      <img src={this.state.src} alt="avatar.png" />
      {this.state.err && <p>{this.state.err} </p>}
    </Fragment>
  );
}

export default AvatarFromFiles;
