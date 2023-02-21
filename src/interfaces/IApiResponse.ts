interface IApiResponse {
  message: string;
  success: boolean;
  result: any;
}

export const apiResponse: IApiResponse = {
  message: '',
  success: false,
  result: undefined,
};
