import { ISMSResponse, ISMSRequest, IBalanceResponse, ISenderNamesRes } from './interfaces/sms.interface';
export declare class SMS {
    private apiKey;
    private secretKey;
    private auth;
    constructor(apiKey: string, secretKey: string);
    sendSMS(body: ISMSRequest, contentType?: string): Promise<ISMSResponse>;
    checkBalance(contentType?: string): Promise<IBalanceResponse>;
    getSenderNames(): Promise<ISenderNamesRes>;
}
