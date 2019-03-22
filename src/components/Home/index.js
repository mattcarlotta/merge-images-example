import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import AvatarFromFiles from '../AvatarFromFiles';
import AvatarFromServer from '../AvatarFromServer';
import { app, loading, logoContainer, logoStyle, title } from './styles.scss';

const data = {
  head: 'head2',
  eyes: 'eyes2',
  mouth: 'mouth2',
};

const fetchAvatarFromAPI = status =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 200) {
        resolve({ data });
      } else {
        reject('Unable to locate avatar!');
      }
    }, 1500);
  });

class Home extends Component {
  state = { isLoading: true, head: '', eyes: '', mouth: '' };

  componentDidMount = () => {
    this.fetchAvatar();
  };

  fetchAvatar = () => {
    fetchAvatarFromAPI(200)
      .then(({ data }) => {
        this.setState({ isLoading: false, ...data });
      })
      .catch(err => this.setState({ err: err.toString() }));
  };

  render = () => (
    <div className={app}>
      <div className={logoContainer}>
        <img className={logoStyle} src={logo} alt="" />
        <h1 className={title}>React Starter Kit</h1>
        <h1 className={title}>Edit ./components and save to reload.</h1>
        <AvatarFromFiles />
        {this.state.isLoading ? (
          <img className={loading} src={logo} alt="" width={100} />
        ) : (
          <AvatarFromServer
            head={this.state.head}
            eyes={this.state.eyes}
            mouth={this.state.mouth}
          />
        )}
      </div>
      {this.state.err && <p>{this.state.err} </p>}
    </div>
  );
}

export default Home;
