export const save_product = (products) => {
  return {
    type: 'SAVE_PRODUCTS',
    payload: products,
  };
};
