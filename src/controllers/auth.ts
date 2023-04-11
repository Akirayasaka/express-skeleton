import type { Request, Response } from 'express';
import { apiResponse } from '@src/interfaces/IApiResponse';

/** 註冊 */
export const register = async (req: Request, res: Response) => {
  try {
    apiResponse.success = true;
    apiResponse.result = [];
    res.json(apiResponse);
  } catch (ex) {
    apiResponse.message = `${ex}`;
    res.status(500).json(apiResponse);
  }
};
