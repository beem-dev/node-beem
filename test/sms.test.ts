import { SMS } from '../src';
import { beemApiKey, beemSecret, invalidSms, sms } from './fixture';

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
      const beem = new SMS(beemSecret, beemApiKey);

      const response = await beem.getSenderNames();

      expect(response).toBeTruthy();

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
      const beem = new SMS(beemSecret, beemApiKey);

      const response = await beem.sendSMS(invalidSms);

      expect(response).toEqual({
        code: 111,
        message: 'Invalid Sender Id',
      });
    });

    it('Should send SMS successfully', async () => {
      const beem = new SMS(beemSecret, beemApiKey);

      const response = await beem.sendSMS(sms);

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
