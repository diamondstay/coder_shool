// import * as Types from '../constants/ActionType';

const initState = {
  products: [],
};

const products = (state = initState, action) => {
  switch (action.type) {
    // SHOW ALL PRODUCTS
    case 'SAVE_PRODUCTS':
      const newProducts = action.payload;
      return {
        ...state,
        products: newProducts,
      };
    default:
      return state;
  }
};

export default products;
