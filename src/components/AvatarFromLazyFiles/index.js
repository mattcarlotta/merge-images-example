import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import mergeImages from 'merge-images';

class AvatarFromLazyFiles extends Component {
  state = { src: '', err: '' };

  componentDidMount = async () => {
    try {
      const { lazyHead: head, lazyEyes: eyes, lazyMouth: mouth } = this.props;
      const headImage = await import(/* webpackMode: "lazy-once" */ `../../images/${head}.png`);
      const eyesImage = await import(/* webpackMode: "lazy-once" */ `../../images/${eyes}.png`);
      const mouthImage = await import(/* webpackMode: "lazy-once" */ `../../images/${mouth}.png`);
      const src = await mergeImages([
        headImage.default,
        eyesImage.default,
        mouthImage.default,
      ]);
      this.setState({ src });
    } catch (err) {
      this.setState({ err: err.toString() });
    }
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
  lazyHead: PropTypes.string.isRequired,
  lazyEyes: PropTypes.string.isRequired,
  lazyMouth: PropTypes.string.isRequired,
};

export default AvatarFromLazyFiles;
