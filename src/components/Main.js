require('normalize.css/normalize.css');
require('styles/App.less');
require('font-awesome/less/font-awesome.less');

import React from 'react';
import Header from 'components/Header';
import Content from 'components/Content';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Content />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
