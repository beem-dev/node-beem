import { IOTPResponse } from './interfaces/otp.interface';
export declare class OTP {
    private apiKey;
    private secretKey;
    private auth;
    private appId;
    constructor(appId: number, apiKey: string, secretKey: string);
    requestOtp(phoneNumber: string, contentType?: string): Promise<IOTPResponse>;
    verifyOtp(pin: number, pinId: string): Promise<IOTPResponse>;
}
