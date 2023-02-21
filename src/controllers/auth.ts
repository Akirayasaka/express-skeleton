import { apiResponse } from '../interfaces/IApiResponse';

/** 註冊 */
export const register = async (req: any, res: any) => {
  try {
    apiResponse.success = true;
    res.json(apiResponse);
  } catch (ex) {
    apiResponse.message = `${ex}`;
    res.status(500).json(apiResponse);
  }
};
