import React from 'react';
require('styles/DiaryListItem.less');
class DiaryListItem extends React.Component {
    render(){
        return(
            <div className="diaryListItem">
                <div className="left_content">
                    <div className="date">
                        27
                    </div>
                    <div className="day">
                        星期四
                    </div>
                </div>
                <div className="center_content">
                    <div className="time">
                        12:15
                    </div>
                    <div className="title">
                        東京生活3
                    </div>
                    <div className="description">
                        跟前輩去吃飯的時候遇到不好的客人
                    </div>
                </div>
                <div className="right_content">
                    <div className="add_attachment">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        <i className="fa fa-file-o" aria-hidden="true"></i>
                        <i className="fa fa-film" aria-hidden="true"></i>
                    </div>
                    <div className="has_attachment">
                        <i className="fa fa-paperclip" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiaryListItem;
