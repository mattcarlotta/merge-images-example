import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import mergeImages from 'merge-images';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../../images', false, /\.(png|jpe?g)$/),
);

class AvatarFromLazyFiles extends Component {
  state = { src: '', err: '' };

  componentDidMount = () => {
    const { headSelection, eyesSelection, mouthSelection } = this.props;
    mergeImages([
      images[headSelection],
      images[eyesSelection],
      images[mouthSelection],
    ])
      .then(src => this.setState({ src }))
      .catch(err => this.setState({ err: err.toString() }));
  };

  render = () => (
    <Fragment>
      <h5>Avatar From Lazy Files</h5>
      <img src={this.state.src} alt="avatar.png" />
      {this.state.err && <p>{this.state.err} </p>}
    </Fragment>
  );
}

AvatarFromLazyFiles.propTypes = {
  headSelection: PropTypes.number.isRequired,
  eyesSelection: PropTypes.number.isRequired,
  mouthSelection: PropTypes.number.isRequired,
};

export default AvatarFromLazyFiles;
