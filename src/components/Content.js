import React from 'react';
import DiaryListItem from 'components/DiaryListItem';
require('styles/Content.less');
class Content extends React.Component {
  render() {
    return (
        <div className="content">
            <DiaryListItem />
        </div>
    );
  }
}

export default Content;
