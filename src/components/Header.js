import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="header_top">
            <div className="button-group">
                <button className="active">EveryDay</button>
                <button>Calendar</button>
                <button>Diary</button>
            </div>
        </div>
        <div className="header_title">Diary</div>
      </div>
    );
  }
}

export default Header;
