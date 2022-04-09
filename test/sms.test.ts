import { SMS } from '../src';
import { ISMSRequest } from '../src/interfaces/sms.interface';

const invalidSms: ISMSRequest = {
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

const sms: ISMSRequest = {
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

// create unit test for SMS
describe('SMS API', () => {
  describe('Send SMS', () => {
    it('Should fail from empty credentials entered', async () => {
      const beem = new SMS('', '');

      const response = await beem.sendSMS(sms);

      expect(response).toEqual({
        code: 120,
        message: 'Invalid api_key and/or secret_id',
      });
    });

    it('Get sender names', async () => {
      const beem = new SMS(
        '9dd7fa924935d7db',
        'ZmMyM2JiYTc2N2EzYzJhNDI2ZGU3MTI3ZWZhNGQ0MDYzZmZkZWM5MjdlMDhjZTJhNzRhYjZjNjAwY2EzYjY1MA=='
      );

      const response = await beem.getSenderNames();

      console.log(response);

      // expect(response).toEqual({
      //   code: 0,
      //   message: 'OK',
      //   data: {
      //     sender_names: [
      //       {
      //         sender_id: 1,
      //         sender_name: 'INFO',
      //       },
      //     ],
      //   },
      // });
    });

    it('Should fail from Invalid message', async () => {
      const beem = new SMS(
        '9dd7fa924935d7db',
        'ZmMyM2JiYTc2N2EzYzJhNDI2ZGU3MTI3ZWZhNGQ0MDYzZmZkZWM5MjdlMDhjZTJhNzRhYjZjNjAwY2EzYjY1MA=='
      );

      const response = await beem.sendSMS(invalidSms);

      expect(response).toEqual({
        code: 111,
        message: 'Invalid Sender Id',
      });
    });

    it('Should send SMS successfully', async () => {
      const beem = new SMS(
        '9dd7fa924935d7db',
        'ZmMyM2JiYTc2N2EzYzJhNDI2ZGU3MTI3ZWZhNGQ0MDYzZmZkZWM5MjdlMDhjZTJhNzRhYjZjNjAwY2EzYjY1MA=='
      );

      const response = await beem.sendSMS(sms);

      console.log(response);

      expect(response).toEqual({
        successful: true,
        request_id: response.request_id,
        code: 100,
        message: 'Message Submitted Successfully',
        valid: 1,
        invalid: 0,
        duplicates: 0,
      });
    });
  });
});