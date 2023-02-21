import services from '../services';
import { apiResponse } from '../interfaces/IApiResponse';

/** 取得全部產品 */
export const getAllProduct = async (req: any, res: any) => {
  try {
    apiResponse.success = true;
    apiResponse.result = await services.demo.getList();
    res.json(apiResponse);
  } catch (ex) {
    apiResponse.message = `${ex}`;
    res.status(500).json(apiResponse);
  }
};

/** 根據ID取得單筆產品 */
export const getProductById = async (req: any, res: any) => {
  try {
    apiResponse.success = true;
    apiResponse.result = await services.demo.get();
    res.json(apiResponse);
  } catch (ex) {
    apiResponse.message = `${ex}`;
    res.status(500).json(apiResponse);
  }
};
