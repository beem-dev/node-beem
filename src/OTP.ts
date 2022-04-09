import fetch from 'node-fetch';
import { IOTPResponse } from './interfaces/otp.interfaces';

const OTP_REQUEST_URL = 'https://apiotp.beem.africa/v1/request';
const OTP_VERIFY_URL = 'https://apiotp.beem.africa/v1/verify';

export class OTP {
  private api_key: string;
  private secret_key: string;
  private auth: string;
  private app_id: number;

  //initialize api_key and secret_key in constructor
  constructor(app_id: number, api_key: string, secret_key: string) {
    this.api_key = api_key;
    this.secret_key = secret_key;
    this.app_id = app_id;
    this.auth = Buffer.from(this.api_key + ':' + this.secret_key).toString(
      'base64'
    );
  }

  public async request_otp(
    phone_number: string,
    content_type: string = 'application/json'
  ): Promise<IOTPResponse> {
    // TODO: Try catch
    const response = await fetch(OTP_REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': content_type,
        Authorization: 'Basic ' + this.auth,
      },
      body: JSON.stringify({
        appId: this.app_id,
        msisdn: phone_number,
      }),
    }).then(data => data.json());

    return response;
  }

  public async verify_otp(
    pin: number,
    pin_id: string,
  ): Promise<IOTPResponse> {

    const response = await fetch(OTP_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + this.auth,
      },
      body: JSON.stringify({
        pinId: pin_id,
        pin: pin,
      }),
    }).then(data => data.json());

    return response;
  }
}
