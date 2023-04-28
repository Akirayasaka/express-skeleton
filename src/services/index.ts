import * as demo from './demo/demo';

const services = {
  auth: {},
  user: {},
  demo: {
    /** 取得清單 */
    getList: demo.fetchAllProducts,
    /** 取得單筆資料 */
    get: demo.fetchProduct,
  },
};

export default services;
