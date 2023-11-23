import axios from 'axios';

export const updateProduct = (id, productData) => {
  return axios.put(`/signs/page2/${id}`, productData);
};
