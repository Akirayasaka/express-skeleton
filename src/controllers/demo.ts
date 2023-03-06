import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import services from '@src/services';
import { apiResponse } from '@src/interfaces/IApiResponse';
import { IProduct } from '@src/interfaces/IDemo';

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
 * request body: { id: number }
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
