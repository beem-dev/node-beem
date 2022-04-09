import fetch from 'node-fetch';
import { IOTPResponse } from './interfaces/otp.interface';

const OTP_REQUEST_URL = 'https://apiotp.beem.africa/v1/request';
const OTP_VERIFY_URL = 'https://apiotp.beem.africa/v1/verify';

export class OTP {
  private apiKey: string;
  private secretKey: string;
  private auth: string;
  private appId: number;

  //initialize apiKey and secretKey in constructor
  constructor(appId: number, apiKey: string, secretKey: string) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.appId = appId;
    this.auth = Buffer.from(this.apiKey + ':' + this.secretKey).toString(
      'base64'
    );
  }

  public async requestOtp(
    phoneNumber: string,
    contentType: string = 'application/json'
  ): Promise<IOTPResponse> {
    // TODO: Try catch
    const response = await fetch(OTP_REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Authorization: 'Basic ' + this.auth,
      },
      body: JSON.stringify({
        appId: this.appId,
        msisdn: phoneNumber,
      }),
    }).then(data => data.json());

    return response;
  }

  public async verifyOtp(
    pin: number,
    pinId: string,
  ): Promise<IOTPResponse> {

    const response = await fetch(OTP_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + this.auth,
      },
      body: JSON.stringify({
        pinId: pinId,
        pin: pin,
      }),
    }).then(data => data.json());

    return response;
  }
}
