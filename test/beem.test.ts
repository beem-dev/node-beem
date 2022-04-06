// import fetch, {Response} from 'node-fetch';
import { OTP } from '../src';

describe('OTP API', () => {
  it('Should fail from empty credentials entered', async () => {
    const beem = new OTP(0, '', '');

    const response = await beem.request_otp('');

    expect(response).toEqual({
      code: 120,
      message: 'Invalid api_key and/or secret_id',
    });
  });

  it('Should fail from invalid credentials entered', async () => {
    const beem = new OTP(0, 'invalid_key', 'invalid_secret');

    const response = await beem.request_otp('');

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

    const response = await beem.request_otp('254712345678');

    console.log(response);

    expect(response).toEqual({
      data: {
        message: {
          code: 100,
          message: 'SMS sent successfully',
        },
      },
    });
  });
});

// jest.mock('node-fetch');

// async function makeRequest() {
//     const res = await fetch("https://httpbin.org/get");
//     return await res.json();
// }

// describe('fetch-mock test', () => {
//     const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

//     it('check fetch mock test', async () => {
//         const json = jest.fn() as jest.MockedFunction<any>;
//         json.mockResolvedValue({status: 200});
//         mockFetch.mockResolvedValue({ok: true, json} as Response);
//         await makeRequest();
//         expect(json.mock.calls.length).toBe(1);
//     })
// })
