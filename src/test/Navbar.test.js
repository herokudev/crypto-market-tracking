import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Check if the Navbar is rendered', () => {
  test('Renders date', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  test('renders title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Top CryptoCurrencies Market Cap')).toBeInTheDocument();
  });
});
