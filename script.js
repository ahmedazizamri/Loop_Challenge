const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
  tips = [],
  totals = [];
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
for (i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
const calcAverage = function (arr) {
  let x = 0;
  for (i = 0; i < arr.length; i++) {
    x = x + arr[i];
    return x / arr.length;
  }
};
console.log(bills);
console.log("Average Bills : ",calcAverage(bills));
console.log(tips);
console.log("Average Tips : ",calcAverage(tips));
console.log(totals);
console.log("Average Total : ",calcAverage(totals));
