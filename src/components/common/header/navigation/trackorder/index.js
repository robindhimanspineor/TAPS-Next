import React from 'react';
import TrackOrderDropDown from './trackorderdropdown';
import TrackOrderSvg from '../../../Svg/TrackOrderSvg';
import { withRouter } from 'found';

class Trackorder extends React.Component {
  state = {
    open: false,
    trackingId: '',
    type: '',
    trackerror: '',
  };

  setTrackingId = event => {
    this.setState({ trackingId: event.target.value, trackerror: '' });
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open, type: 'track' }));
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
    if (this.state.type === 'track') {
      this.setState({ open: false, type: '', trackerror: '' });
      const overlay = document.getElementById('overlay');
      overlay.style.opacity = 0;
      overlay.style.zIndex = -1;
      overlay.style.transition = 'opacity 0.2s ease-in-out';
      document.body.classList.remove('overflow-hidden');
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.trackingId === '') {
      this.setState({ trackerror: true });
    }
    if (this.state.trackingId !== '') {
      this.handleClose();
      const path = `/order/trackpackage/${this.state.trackingId}/view`;
      this.props.router.push(path);
    }
  };
  render() {
    const { open } = this.state;
    return (
      <div className="track-button top-header-track">
        <div className="wrap" onClick={this.handleToggle} role="presentation" style={{ display: "inline-flex" }}>
          <span className="track_svg">
            <TrackOrderSvg />
          </span>
          <span className="icon_label">Track order</span>
        </div>

        <TrackOrderDropDown
          handleClose={this.handleClose}
          handleSubmit={this.handleSubmit}
          setTrackingId={this.setTrackingId}
          open={open}
          trackerror={this.state.trackerror}
        />
      </div>
    );
  }
}

export default withRouter(Trackorder);
