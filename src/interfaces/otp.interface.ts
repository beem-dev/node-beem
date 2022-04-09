export interface IOTPResponse {
  code?: number;
  message?: string;
  data?: {
    pinId?: string;
    message: {
      code: number;
      message: string;
    };
  };
}


