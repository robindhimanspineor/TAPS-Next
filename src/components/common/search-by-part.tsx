import { useState } from 'react';

import styles from '../../styles/tabs.module.scss';
import FitmentSearchInput from './fitment/fitment-search-input';

const SearchByPart = () => {
  const [searchByPart, setSearchByPart] = useState(false);
  const [partValue, setPartValue] = useState('');

  const handlePartSearch = (e: any) => {
    e.preventDefault();
    const searchString = partValue;

    if (searchString.trim().length === 0) {
      setSearchByPart(true);
    } else {
      const path = `/part-search/${encodeURIComponent(searchString.trim())}`;
      console.log(path, 'search by part');
    }
  };
  const handlePartChange = (event: any) => {
    setPartValue(event.target.value);
    setSearchByPart(true);
  };

  return (
    <div className={styles.formWrapper}>
      <form id="vinSearch" onSubmit={handlePartSearch}>
        {searchByPart ? (
          <span
            id="searchByPart"
            className="fitment-error"
            style={{ width: 'auto' }}
          >
            Please Search by Some Value.
          </span>
        ) : (
          ''
        )}
        <FitmentSearchInput
          value={partValue}
          placeholder="Search By Part Number"
          buttonlabel="Search"
          handlePartChange={handlePartChange}
          label="Search By Part Number"
        />
      </form>
    </div>
  );
};

export default SearchByPart;
