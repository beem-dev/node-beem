import {
  ISMSResponse,
  ISMSRequest,
  IBalanceResponse,
  ISenderNamesRes,
} from './interfaces/sms.interface';
import fetch from 'node-fetch';

const SEND_SMS_URL = 'https://apisms.beem.africa/v1/send';
const CHECK_BALANCE_URL =
  'https://apisms.beem.africa/public/v1/vendors/balance';
const SENDER_NAMES_URL = 'https://apisms.beem.africa/public/v1/sender-names';

export class SMS {
  private apiKey: string;
  private secretKey: string;
  private auth: string;

  constructor(apiKey: string, secretKey: string) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.auth = Buffer.from(this.apiKey + ':' + this.secretKey).toString(
      'base64'
    );
  }

  public async sendSMS(
    body: ISMSRequest,
    contentType: string = 'application/json'
  ): Promise<ISMSResponse> {
    return fetch(SEND_SMS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Authorization: 'Basic ' + this.auth,
      },
      body: JSON.stringify({
        body,
      }),
    }).then(data => data.json());
  }

  public async checkBalance(
    contentType: string = 'application/json'
  ): Promise<IBalanceResponse> {
    return fetch(CHECK_BALANCE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': contentType,
        Authorization: 'Basic ' + this.auth,
      },
    }).then(data => data.json());
  }

  public async getSenderNames(): Promise<ISenderNamesRes> {
    return fetch(SENDER_NAMES_URL, {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + this.auth,
      },
    }).then(data => data.json());
  }
}
