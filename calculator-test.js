
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 31,
    rate: 4.3
  }
  expect(calculateMonthlyPayment(values)).toEqual('487.07');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 500000,
    years: 13,
    rate: 2.9
  }
  expect(calculateMonthlyPayment(values)).toEqual('3850.99');
});

it('should handle very high number of years', function () {
  const values = {
    amount: 500000,
    years:  2.9,
    rate:   200
  };
  expect(calculateMonthlyPayment(values)).toEqual('1212.02')
});