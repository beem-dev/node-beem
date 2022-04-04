// import fetch, {Response} from 'node-fetch';

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
test('if jest is happy', () => {
    expect(1).toBe(1);
})