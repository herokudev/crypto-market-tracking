import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stat from './Stat';
import { fetchCurrency, statPageSuccess } from '../redux/currencies';

const Stats = ({ match }) => {
  const allCurrencies = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (allCurrencies.length === 0) {
      dispatch(fetchCurrency());
    }
    dispatch(statPageSuccess(true));
  }, []);

  const currency = allCurrencies.find(
    (currency) => currency.id.toString() === match.params.id.toString(),
  );

  if (allCurrencies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="Header-Container">
        <div className="Header-Picture">
          <img src={currency.image} alt="Logo" />
        </div>
        <div className="Header-Name">
          <h2>{currency.name.toUpperCase()}</h2>
          <p>
            {currency.marketCap}
            {' '}
            <br />
            {' '}
            Market Capitalization
          </p>
        </div>
      </div>
      <div className="All-Stats">
        <h3 className="Currency-Stats">STATS BY CURRENCY</h3>
        <Stat currency={currency} />
      </div>
    </div>
  );
};

export default Stats;
