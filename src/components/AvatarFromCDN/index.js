import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AvatarFromCDN = ({ src }) => (
  <Fragment>
    <h5>Avatar From CDN</h5>
    <img src={src} alt="avatar" />
  </Fragment>
);

AvatarFromCDN.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AvatarFromCDN;
