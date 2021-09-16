import { useState } from 'react';

const SearchBar = () => {
  const [value, setvalue] = useState('');

  const onChange = (event: any) => {
    setvalue(event.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    // if (state.value.trim().length === 0) {
    //   document.getElementById('searchinput').classList.add('error');
    // } else {
    //   const path = `/search/${encodeURIComponent(state.value.trim())}`;
    //   // GA Tracling
    //   dataLayer.push({
    //     'search-input': this.state.value,
    //   });

    //   this.props.router.push(path);
    // }
  };

  // render() {
  //   const { value } = this.state;

  return (
    <div className="searchbar">
      <form id="textSearchForm" onSubmit={handleSearch}>
        <div className="form-group-wrapper">
          <input
            type="text"
            id="searchinput"
            placeholder="Search by Year, Make, Model, Product Type, Part Number or Brand..."
            value={value}
            onChange={onChange}
            className="react-autosuggest__input"
            aria-label="Search part you need"
            autoComplete="off"
          />

          <div className="search-icon">
            <button type="submit" id="searchButton" aria-label="Search">
              <span>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 52.966 52.966"
                  // style={{ background: 'new 0 0 52.966 52.966' }}
                  xmlSpace="preserve"
                  aria-label="search icon"
                >
                  {' '}
                  <path
                    d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                                    c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                                    C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                                    S32.459,40,21.983,40z"
                    fill="#FFFFFF"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
