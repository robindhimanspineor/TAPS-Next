import { useState } from 'react';

import { getCookie, getYears } from '../../helpers';
import styles from '../../styles/tabs.module.scss';
import FitmentSelectInput from './fitment/fitment-select';

const SearchByVehicle = () => {
  const [state, setState] = useState({
    vinValue: '',
    partValue: '',
    errMsg: '',
    year: null,
    make: null,
    model: null,
    submodel: null,
    engine: null,
    userId: getCookie('vehicle_uuid'),
    savedlist: false,
    addnewvehicle: false,
    searchByPart: false,
    searchByVin: false,
    message: false,
    vehicle: [],
  });

  const renderYears = () => {
    return (
      <FitmentSelectInput
        label="Year"
        value="Select Year"
        optionsArray={getYears()}
        message={state.message}
        year={state.year}
        onChange={(value: any) =>
          setState({
            ...state,
            year: value,
          })
        }
      />
    );
  };

  const renderMake = () => {
    return (
      <FitmentSelectInput
        label="Make"
        value="Select Make"
        optionsArray={getYears()}
        message={state.message}
        year={state.year}
        make={state.make}
        onChange={(value: any) => console.log(value)}
      />
    );
  };

  const renderModel = () => {
    return (
      <FitmentSelectInput
        label="Model"
        value="Select Model"
        optionsArray={getYears()}
        message={state.message}
        year={state.year}
        make={state.make}
        model={state.model}
        onChange={(value: any) => console.log(value)}
      />
    );
  };

  const renderSubModel = () => {
    return (
      <FitmentSelectInput
        label="Submodel"
        value="Select Submodel"
        optionsArray={getYears()}
        message={state.message}
        year={state.year}
        make={state.make}
        model={state.model}
        submodel={state.submodel}
        onChange={(value: any) => console.log(value)}
      />
    );
  };

  const renderEngine = () => {
    return (
      <FitmentSelectInput
        label="Engine"
        value="Select Engine"
        optionsArray={getYears()}
        message={state.message}
        year={state.year}
        make={state.make}
        model={state.model}
        submodel={state.submodel}
        engine={state.engine}
        onChange={(value: any) => console.log(value)}
      />
    );
  };

  const renderShopNowButton = () => {
    return (
      <div className={styles.fitmentInput}>
        <button
          type="submit"
          className={`${styles.buttonFitSearch}`}
          id="fitSearch"
        >
          Shop Now
        </button>
      </div>
    );
  };

  return (
    <form id="fitmentSearch">
      <div className={styles.formWrapper}>
        {renderYears()}
        {renderMake()}
        {renderModel()}
        {renderSubModel()}
        {renderEngine()}
        {renderShopNowButton()}
      </div>
    </form>
  );
};

export default SearchByVehicle;
