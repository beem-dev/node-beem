import { ISMSRequest } from '../src/interfaces/sms.interface';

export const beemSecret = process.env.BEEM_SECRET || '';
export const beemApiKey = process.env.BEEM_API_KEY || '';

export const invalidSms: ISMSRequest = {
  source_addr: '',
  schedule_time: '',
  encoding: 0,
  message: '',
  recipients: [
    {
      recipient_id: 0,
      dest_addr: '',
    },
  ],
};

export const sms: ISMSRequest = {
  source_addr: 'INFO',
  schedule_time: '',
  encoding: 0,
  message: 'Hello world',
  recipients: [
    {
      recipient_id: 1,
      dest_addr: '255746821320',
    },
  ],
};
