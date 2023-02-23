import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import services from '../services';
import { apiResponse } from '../interfaces/IApiResponse';
import { IProduct } from 'interfaces/IDemo';

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

/** 根據ID取得單筆產品
 * req: { id: number }
 */
export const getProductById = async (
  req: Request<ParamsDictionary, unknown, IProduct>,
  res: Response
) => {
  try {
    apiResponse.success = true;
    apiResponse.result = await services.demo.get(req.body.id);
    res.json(apiResponse);
  } catch (ex) {
    apiResponse.message = `${ex}`;
    res.status(500).json(apiResponse);
  }
};
