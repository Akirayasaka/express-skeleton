import * as demo from './demo/demo';

const services = {
  auth: {},
  user: {},
  demo: {
    getList: demo.fetchAllProducts,
    get: demo.fetchProduct,
  },
};

export default services;
