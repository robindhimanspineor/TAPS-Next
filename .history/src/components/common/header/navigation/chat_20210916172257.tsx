import React from 'react';
import CommentsSvg from '../../Svg/CommentsSvg';
import { loadSnapengage } from '../../../../helpers';

class Chat extends React.Component {
  loadChat = () => {
    loadSnapengage();
  };

  render() {
    return (
      <li className="chat-button" onClick={this.loadChat} role="presentation">
        <div className="wrap">
          <span className="nav-icon">
            <CommentsSvg />
          </span>
          <span className="icon_label">Chat</span>
        </div>
      </li>
    );
  }
}

export default Chat;
