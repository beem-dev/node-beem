export * from './OTP';
export * from './SMS';

// TODO: Fix error in tests when the following is removed:
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
