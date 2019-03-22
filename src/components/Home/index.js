import React from 'react';
import logo from '../../images/logo.svg';
import AvatarFromFiles from '../AvatarFromFiles';
import AvatarFromServer from '../AvatarFromServer';
import { app, logoContainer, logoStyle, title } from './styles.scss';

export default () => (
  <div className={app}>
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={title}>React Starter Kit</h1>
      <h1 className={title}>Edit ./components and save to reload.</h1>
      <AvatarFromFiles />
      <AvatarFromServer head="head2" eyes="eyes2" mouth="mouth2" />
    </div>
  </div>
);
