import CommentsSvg from '../../../../svg/CommentsSvg.js';

const ShoppingCart = () => {
  return (
    <li className="full-cart">
      <div className="wrap">
        <span className="nav-icon">
          <CommentsSvg />
        </span>
        <span className="icon_label">Chat</span>
      </div>
    </li>
  );
};

export default ShoppingCart;
