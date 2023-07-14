import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51MG0R4SFPvtwuestrxtL1Dlsy9AGBkwbrusPyDhsv04sybR1tH0sB9Dly6nlrMxICLJH9BJQLLHEIOaROCtopQSQ00zFhpLosW');
  }
  return stripePromise;
};

export default getStripe;