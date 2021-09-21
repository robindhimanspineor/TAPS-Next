import { useState } from 'react';

// import ClickAwayListener from '../../common/ClickAwaListener.jsx';

import styles from '../../../styles/tabs.module.scss';

const FitmentSelect = ({
  disabled,
  label,
  optionsArray,
  year,
  make,
  model,
  submodel,
  engine,
  message,
  value,
  onChange,
}: any) => {
  const [open, setOpen] = useState(false);
  const [metaopen, setMetaopen] = useState(false);
  const [fitmentValue, setFitmentValue] = useState(value);

  const handleToggle = () => !disabled && setOpen(!open);

  const choosetext = (event: any) => {
    const labelValue = event.target.textContent;
    setOpen(false);
    setFitmentValue(labelValue);
    setMetaopen(true);

    onChange(labelValue);
  };

  let messageID = '';
  if (year === null) {
    messageID = 'yearMessage';
  } else if (year !== null && make === null) {
    messageID = 'makeMessage';
  } else if (year !== null && make !== null && model === null) {
    messageID = 'modelMessage';
  } else if (
    year !== null &&
    make !== null &&
    model !== null &&
    submodel === null
  ) {
    messageID = 'submodelMessage';
  } else if (
    year !== null &&
    make !== null &&
    model !== null &&
    submodel !== null &&
    engine === null
  ) {
    messageID = 'engineMessage';
  }

  const renderMessage = () => {
    if (message) {
      switch (messageID) {
        case 'yearMessage':
          return (
            <span id={messageID} className={`${styles.fitmentError}`}>
              Please Select One Value.
            </span>
          );
        case 'makeMessage':
          return (
            <span id={messageID} className={`${styles.fitmentError}`}>
              Please Select One Value.
            </span>
          );
        case 'modelMessage':
          return (
            <span id={messageID} className={`${styles.fitmentError}`}>
              Please Select One Value.
            </span>
          );
        case 'submodelMessage':
          return (
            <span id={messageID} className={`${styles.fitmentError}`}>
              Please Select One Value.
            </span>
          );
        case 'engineMessage':
          return (
            <span id={messageID} className={`${styles.fitmentError}`}>
              Please Select One Value.
            </span>
          );

        default:
          return '';
      }
    }
    return '';
  };

  return (
    <div className={styles.fitmentInput}>
      <div
        className={
          `${disabled}`
            ? `${styles.selectText} ${styles.disabled}`
            : `${styles.selectText}`
        }
        onClick={handleToggle}
        role="presentation"
      >
        <span
          className={`${styles.meta}`}
          style={{ display: metaopen && year !== null ? 'block' : 'none' }}
        >
          {label}
        </span>
        <span>{year !== null ? fitmentValue : 'Select Year'}</span>
        {/* <span>{year !== null ? fitmentValue : 'Select Year'}</span> */}
        <span className="right-arrow">&#9662;</span>
        {renderMessage()}
      </div>
      {/* <ClickAwayListener onClickAway={() => setOpen(false)}> */}
      <div
        className={`${styles.dropdown}`}
        style={{ display: open ? 'block' : 'none' }}
      >
        <ul>
          {optionsArray.map((name: any) => (
            <li key={name.key} onClick={choosetext} role="presentation">
              {name.value.replace(/&amp;/g, '&')}
            </li>
          ))}
        </ul>
      </div>
      {/* </ClickAwayListener> */}
    </div>
  );
};

export default FitmentSelect;
