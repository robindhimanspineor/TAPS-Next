import React from 'react';
import ClickAwayListener from '../../../ClickAwayListener';

const TrackOrderDropdown = props => (
  <ClickAwayListener onClickAway={props.handleClose}>
    <div
      className="dropdown-menu track-dropdown"
      style={{ display: props.open ? 'block' : 'none' }}
    >
      <div className="track-text">
        <p>Please enter tracking number.</p>
        <span>( Tracking number has been sent to you in the email.)</span>
      </div>
      <form onSubmit={props.handleSubmit}>
        <div className="track-input">
          <input type="text" onChange={props.setTrackingId} />
          {props.trackerror ? (
            <span className="error">Please enter tracking number.</span>
          ) : null}
        </div>
        <div className="track-button">
          <button type="submit" className="button-blue-solid">
            Track Order
          </button>
        </div>
      </form>
    </div>
  </ClickAwayListener>
);

export default TrackOrderDropdown;
