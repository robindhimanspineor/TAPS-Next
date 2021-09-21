import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../../../styles/tabs.module.scss';

const FitmentSearchInput = ({
  value,
  buttonlabel,
  placeholder,
  handlePartChange,
  label,
}: any) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.fitmentInput}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handlePartChange}
          aria-label={label}
        />
      </div>
      <div className={styles.fitmentInputButtonContainer}>
        <button
          type="submit"
          className={`${styles.buttonFitSearch} ${styles.buttonVinSearch}`}
        >
          {buttonlabel}
        </button>
      </div>
    </div>
  );
};

// FitmentSearchInput.propTypes = {
//   value: PropTypes.string.isRequired,
//   buttonlabel: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   handlePartChange: PropTypes.func,
//   label: PropTypes.string,
// };

export default FitmentSearchInput;
