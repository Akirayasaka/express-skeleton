import { Request, Response } from 'express';
import services from '../services';
import { apiResponse } from '../interfaces/IApiResponse';

/** 取得全部產品 */
export const getAllProduct = async (req: Request, res: Response) => {
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
export const getProductById = async (req: Request, res: Response) => {
  try {
    apiResponse.success = true;
    apiResponse.result = await services.demo.get(1);
    res.json(apiResponse);
  } catch (ex) {
    apiResponse.message = `${ex}`;
    res.status(500).json(apiResponse);
  }
};
