export interface ISMSResponse {
  code: number;
  message: string;
  successful?: boolean;
  request_id?: number;
  valid?: number;
  invalid?: number;
  duplicates?: number;
}

// values are snake cased to mimic the request body
export interface ISMSRequest {
  source_addr: string;
  schedule_time?: string;
  encoding: number;
  message: string;
  recipients: IRecipient[];
}

export interface ISenderNamesRes {
  data: ISenderResData[];
}

export interface IBalanceResponse {
  data?: {
    credit_balance: number;
  };
  code?: number;
  message?: string;
}

interface IRecipient {
  recipient_id: number;
  dest_addr: string;
}

interface ISenderResData {
  id: string;
  senderid: string;
  sample_content: string;
  status: string;
  created: string;
}
