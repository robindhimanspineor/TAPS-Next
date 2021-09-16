import React from 'react';
import ClickAwayListener from '../../ClickAwayListener';
import Link from 'found/lib/Link';
import HelpQuestionSvg from '../../Svg/HelpQuestionSvg';
import { withRouter } from 'found/';

class Help extends React.Component {
  state = {
    open: false,
    type: '',
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open, type: 'help' }));
    setTimeout(() => {
      if (this.state.open) {
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 1;
        overlay.style.zIndex = 9;
        overlay.style.transition = 'opacity 0.2s ease-in-out';
        document.body.classList.add('overflow-hidden');
      } else {
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1;
        overlay.style.transition = 'opacity 0.2s ease-in-out';
        document.body.classList.remove('overflow-hidden');
      }
    }, 10);
  };

  handleClose = () => {
    if (this.state.type === 'help') {
      this.setState({ open: false, type: '' });
      const overlay = document.getElementById('overlay');
      overlay.style.opacity = 0;
      overlay.style.zIndex = -1;
      overlay.style.transition = 'opacity 0.2s ease-in-out';
      document.body.classList.remove('overflow-hidden');
    }
  };
  listClickreturn = e => {
    e.preventDefault();
    this.handleClose();
    this.props.router.push('/returnpolicy');
  };
  listClickfaq = e => {
    e.preventDefault();
    this.props.router.push('/faqs');
    setTimeout(() => {
      document.getElementById('Frequently_1').click();
      this.handleClose();
    }, 100);
  };
  listClickcontact = e => {
    e.preventDefault();
    this.props.router.push('/contactus');
    setTimeout(() => {
      document.getElementById('Contact_0').click();
      this.handleClose();
    }, 100);
  };

  render() {
    const { open } = this.state;
    return (
      <li className="help-button">
        <div className="wrap" onClick={this.handleToggle} role="presentation">
          <span className="nav-icon">
            <HelpQuestionSvg />
          </span>
          <span className="icon_label">Help</span>
        </div>
        <ClickAwayListener onClickAway={this.handleClose}>
          <div
            className="dropdown-menu"
            style={{ display: open ? 'block' : 'none' }}
          >
            <ul className="help-list">
              <li className="list-content">
                <Link to="/returnpolicy" onClick={this.listClickreturn}>
                  <span>Easy Returns</span>
                  <span className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                      aria-label="return svg"
                    >
                      <g>
                        <g>
                          <rect
                            x="222.8"
                            width="66.4"
                            height="128.53"
                            fill="#587aaf"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M497,0H319.201v143.533c0,8.284-6.717,15-15,15h-96.4c-8.283,0-15-6.716-15-15V0H15C6.716,0,0,6.717,0,15v482    c0,8.284,6.716,15,15,15h482c8.285,0,15-6.716,15-15V15C512,6.717,505.285,0,497,0z M352.4,391.5h-96.398c-8.283,0-15-6.716-15-15    c0-8.283,6.717-15,15-15H352.4c18.307,0,33.199-14.894,33.199-33.199c0-18.308-14.893-33.201-33.199-33.201H147.613l22.594,22.594    c5.857,5.857,5.857,15.355,0,21.213c-2.93,2.929-6.77,4.395-10.607,4.395c-3.84,0-7.678-1.465-10.607-4.395l-48.199-48.2    c-2.813-2.813-4.393-6.628-4.393-10.606c0-3.979,1.58-7.794,4.393-10.606l48.203-48.199c5.857-5.858,15.355-5.858,21.213,0    c5.858,5.858,5.857,15.355,0,21.213L147.615,265.1H352.4c34.848,0,63.199,28.352,63.199,63.201    C415.6,363.148,387.248,391.5,352.4,391.5z"
                            fill="#587aaf"
                          />
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="list-content">
                <Link to="/faqs" onClick={this.listClickfaq}>
                  <span> FAQ</span>
                  <span className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="512px"
                      height="512px"
                      viewBox="0 0 510 510"
                      style={{ enableBackground: 'new 0 0 510 510' }}
                      xmlSpace="preserve"
                      aria-label="faq svg"
                    >
                      <g>
                        <g id="help">
                          <path
                            d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M280.5,433.5h-51v-51h51V433.5z     M334.05,237.15L311.1,260.1c-20.399,17.851-30.6,33.15-30.6,71.4h-51v-12.75c0-28.05,10.2-53.55,30.6-71.4L290.7,214.2    c10.2-7.65,15.3-20.4,15.3-35.7c0-28.05-22.95-51-51-51s-51,22.95-51,51h-51c0-56.1,45.9-102,102-102c56.1,0,102,45.9,102,102    C357,201.45,346.8,221.85,334.05,237.15z"
                            fill="#587aaf"
                          />
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="list-content">
                <Link to="/contactus" onClick={this.listClickcontact}>
                  <span>Contact US</span>
                  <span className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="512px"
                      height="512px"
                      viewBox="0 0 511.626 511.626"
                      style={{ enableBackground: 'new 0 0 511.626 511.626' }}
                      xmlSpace="preserve"
                      aria-label="contact"
                    >
                      <g>
                        <g>
                          <path
                            d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099    c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277    c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569    c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852    c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116    c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679    c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974    C26.169,159.743,37.307,170.736,49.106,178.729z"
                            fill="#587aaf"
                          />
                          <path
                            d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699    c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287    c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699    c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265    c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265    V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"
                            fill="#587aaf"
                          />
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </ClickAwayListener>
      </li>
    );
  }
}

export default withRouter(Help);
