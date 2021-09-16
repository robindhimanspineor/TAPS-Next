import CommentsSvg from '../../../../svg/CommentsSvg.js';

const Help = () => {
  return (
    <li className="help-button">
      <div className="wrap">
        <span className="nav-icon">
          <CommentsSvg />
        </span>
        <span className="icon_label">Chat</span>
      </div>
    </li>
  );
};

export default Help;
