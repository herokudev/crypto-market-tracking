const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST';

export const getCurrencyRequest = () => ({
  type: GET_CURRENCY_REQUEST,
});

export const initialState = {
  loading: false,
  currency: [],
  error: '',
  home: true,
  value: 'all',
  filtered: [],
  data: [],
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default currencyReducer;
