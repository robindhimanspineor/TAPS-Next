import { useState } from 'react';

import styles from '../../styles/tabs.module.scss';
import FitmentSearchInput from './fitment/fitment-search-input';

const SearchByVin = () => {
  const [searchByVin, setSearchByVin] = useState(false);
  const [vinValue, setVinValue] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleVinSearch = (e: any) => {
    e.preventDefault();
    const searchVin = vinValue;
    if (searchVin.trim().length === 0) {
      setSearchByVin(true);
      setErrMsg('Please Search by VIN');
    } else if (
      searchVin !== '' &&
      (searchVin.trim().length < 17 || searchVin.trim().length > 17)
    ) {
      setSearchByVin(true);
      setErrMsg('Please enter a valid 17 digits VIN');
    } else {
      const path = `/vin-search/${encodeURIComponent(searchVin.trim())}`;
      console.log(path, 'submit search');
    }
  };
  const handleVinChange = (e: any) => {
    setVinValue(e.target.value);
    setSearchByVin(false);
  };
  return (
    <div className={styles.formWrapper}>
      <form id="vinSearch" onSubmit={handleVinSearch}>
        {searchByVin ? (
          <span
            id="searchByVin"
            className={`${styles.fitmentError}`}
            style={{ width: 'auto' }}
          >
            {errMsg}
          </span>
        ) : (
          ''
        )}
        <FitmentSearchInput
          value={vinValue}
          placeholder="Search By VIN"
          buttonlabel="Search"
          handlePartChange={handleVinChange}
          label="Search By VIN"
        />
      </form>
    </div>
  );
};

export default SearchByVin;
