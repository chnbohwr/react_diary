require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';
import Header from 'components/Header';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
