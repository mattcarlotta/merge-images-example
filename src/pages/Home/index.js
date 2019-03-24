import React, { Fragment, Component } from 'react';
import logo from '../../images/logo.svg';
import AvatarFromCDN from '../../components/AvatarFromCDN';
import AvatarFromFiles from '../../components/AvatarFromFiles';
import AvatarFromLazyFiles from '../../components/AvatarFromLazyFiles';
import AvatarFromLocalServer from '../../components/AvatarFromLocalServer';
import { app, loading, logoContainer, title } from './styles.scss';

const data = {
  head: 'head2',
  lazyHead: 'head3',
  eyes: 'eyes2',
  lazyEyes: 'eyes3',
  mouth: 'mouth2',
  lazyMouth: 'mouth3',
  cdn: 'https://i.imgur.com/foiVXpi.png',
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
      .then(({ data }) => this.setState({ isLoading: false, ...data }))
      .catch(err => this.setState({ err: err.toString() }));
  };

  render = () => (
    <div className={app}>
      <div className={logoContainer}>
        <h1 className={title}>React Starter Kit</h1>
        <AvatarFromFiles />
        {this.state.isLoading ? (
          <img className={loading} src={logo} alt="" width={100} />
        ) : (
          <Fragment>
            <AvatarFromLocalServer {...this.state} />
            <AvatarFromLazyFiles {...this.state} />
            <AvatarFromCDN src={this.state.cdn} />
          </Fragment>
        )}
      </div>
      {this.state.err && <p>{this.state.err}</p>}
    </div>
  );
}

export default Home;
