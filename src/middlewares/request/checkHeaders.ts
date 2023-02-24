import { Request, Response, NextFunction } from 'express';
import { apiResponse } from '@src/interfaces/IApiResponse';

/** 檢查 request headers content-type */
export const contentType = (type: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (
      !req.headers['content-type'] ||
      !req.headers['content-type']?.includes(type)
    ) {
      apiResponse.message = '格式錯誤';
      res.status(400).json(apiResponse);
      return;
    }
    next();
  };
};
