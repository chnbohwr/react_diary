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
                        今天打工遇到不好的客人畫破前輩的衣服，後來我去幫前輩縫好了
                    </div>
                </div>
                <div className="right_content">
                    <div className="add_attachment">
                        <button className="camera_button">
                            <i className="fa fa-camera" aria-hidden="true"></i>
                        </button>
                        <button className="file_button">
                            <i className="fa fa-file-o" aria-hidden="true"></i>
                        </button>
                        <button className="film_button">
                            <i className="fa fa-film" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="has_attachment">
                        <button className="attachment_button">
                            <i className="fa fa-paperclip" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiaryListItem;
