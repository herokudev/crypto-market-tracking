import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/crypto.svg';
import Currency from './Currency';
import { fetchCurrency, statPageSuccess, filterCurrency } from '../redux/currencies';
import Filter from './Filter';

function Currencies() {
  const allCurrencies = useSelector((state) => state.currency.currency);
  const filteredCurrencies = useSelector((state) => state.currency.filtered);
  const data = useSelector((state) => state.currency.data);
  const currencyStatus = useSelector((state) => state.currency.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currencyStatus === false) {
      dispatch(fetchCurrency());
    }
    dispatch(statPageSuccess(false));
  }, []);

  const handleSelection = (e) => {
    dispatch(filterCurrency({ value: e.target.value, data: allCurrencies }));
  };

  const renderedItems = filteredCurrencies.length === 0
   && data.length === 0 ? allCurrencies : filteredCurrencies;

  const marketTotal = () => {
    let total = 0;
    for (let i = 0; i < allCurrencies.length; i += 1) {
      total += allCurrencies[i].marketCap;
    }
    return total;
  };

  return (
    <div className="Home">
      <div className="Header-Container">
        <div className="Header-Picture">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Header-Name">
          <h2>CryptoCurrencies</h2>
          <p>
            {`$${marketTotal()}`}
            {' '}
            <br />
            {' '}
            Market Capitalization
          </p>
        </div>
      </div>
      <div>
        <div className="Currency-Stats">
          <h4 className="Currency-Stats1">STATS BY CURRENCY</h4>
          <Filter handleSelection={handleSelection} />
        </div>
        {currencyStatus}
        <ul className="Currencies">
          {renderedItems.map((currency) => (
            <Currency key={currency.id} currency={currency} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Currencies;
