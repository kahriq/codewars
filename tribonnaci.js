// ----- Tribonacci Sequence

/*
Create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified 
*/

function tribonacci(signature, n) {
  let nextNum = sig =>
    sig[sig.length - 1] + sig[sig.length - 2] + sig[sig.length - 3];

  if (n < 3) return signature.slice(0, n);

  for (let i = 0; i < n - 3; i++) signature.push(nextNum(signature));

  return signature;
}
