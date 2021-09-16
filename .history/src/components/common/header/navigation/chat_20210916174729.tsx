import CommentsSvg from '../../../../svg/CommentsSvg.js';

const Chat = () => {
  return (
    <li
      className="chat-button"
      onClick={() => console.log('loadchat')}
      role="presentation"
    >
      <div className="wrap">
        <span className="nav-icon">
          <CommentsSvg />
        </span>
        <span className="icon_label">Chat</span>
      </div>
    </li>
  );
};

export default Chat;
