import { OTP } from '../src';

describe('OTP API', () => {
  describe('Request OTP', () => {
    it('Should fail from empty credentials entered', async () => {
      const beem = new OTP(0, '', '');

      const response = await beem.requestOtp('');

      expect(response).toEqual({
        code: 120,
        message: 'Invalid api_key and/or secret_id',
      });
    });

    it('Should fail from invalid credentials entered', async () => {
      const beem = new OTP(0, 'invalid_key', 'invalid_secret');

      const response = await beem.requestOtp('');

      expect(response).toEqual({
        code: 120,
        message: 'Invalid Authentication Parameters',
      });
    });

    it('Should send OTP successfully', async () => {
      const beem = new OTP(
        451,
        '9dd7fa924935d7db',
        'ZmMyM2JiYTc2N2EzYzJhNDI2ZGU3MTI3ZWZhNGQ0MDYzZmZkZWM5MjdlMDhjZTJhNzRhYjZjNjAwY2EzYjY1MA=='
      );

      const response = await beem.requestOtp('254712345678');

      console.log(response);

      // expect(response).toEqual({
      //   data: {
      //     message: {
      //       code: 100,
      //       message: 'SMS sent successfully',
      //       pinId: response.data.message["pinId"],
      //     },
      //   },
      // });
    });
  });

  describe('Verify OTP', () => {
    it('Should fail due to invalid pin entered', async () => {
      // TODO: Don't push this to github
      const beem = new OTP(
        451,
        '9dd7fa924935d7db',
        'ZmMyM2JiYTc2N2EzYzJhNDI2ZGU3MTI3ZWZhNGQ0MDYzZmZkZWM5MjdlMDhjZTJhNzRhYjZjNjAwY2EzYjY1MA=='
      );

      const response = await beem.verifyOtp(0, '');

      expect(response).toEqual({
        error: true,
        message: 'Pin must be a string. Please enter PinId',
      });
    });
  });
});
