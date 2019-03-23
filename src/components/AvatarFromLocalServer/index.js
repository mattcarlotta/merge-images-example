import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import mergeImages from 'merge-images';

class AvatarFromLocalServer extends Component {
  state = { src: '', err: '' };

  componentDidMount = () => {
    const { head, eyes, mouth } = this.props;
    mergeImages([
      `../../../images/${head}.png`,
      `../../../images/${eyes}.png`,
      `../../../images/${mouth}.png`,
    ])
      .then(src => this.setState({ src }))
      .catch(err => this.setState({ err: err.toString() }));
  };

  render = () => (
    <Fragment>
      <h5>Avatar From Local Server</h5>
      <img src={this.state.src} alt="avatar.png" />
      {this.state.err && <p>{this.state.err} </p>}
    </Fragment>
  );
}

AvatarFromLocalServer.propTypes = {
  head: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired,
  mouth: PropTypes.string.isRequired,
};

export default AvatarFromLocalServer;
