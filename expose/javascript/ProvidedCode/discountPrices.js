//Question 1
function discountPrices(prices, discount) {
   // var discounted = [];
   // var finalPrice = 0;

   // for (var i = 0; i < prices.length; i++) {
   //    var discountedPrice = prices[i] * (1 - discount);
   //    finalPrice = Math.round(discountedPrice * 100) /100;
   //    discounted.push(finalPrice);
   // }

   // let discounted = [];
   // let finalPrice = 0;

   // for (let i = 0; i < prices.length; i++) {
   //    let discountedPrice = prices[i] * (1 - discount);
   //    finalPrice = Math.round(discountedPrice * 100) /100;
   //    discounted.push(finalPrice);
   // }

   //Question 9 -
   const discounted = [];
   const length = prices.length;

   for (let i = 0; i < length; i++) {
      const discountedPrice = prices[i] * (1 - discount);
      discounted.push(discountedPrice);
   }

   // console.log(i);
   // console.log(length);
   // console.log(discountedPrice);
   // console.log(finalPrice);
   console.log(discounted)

   return discounted;
}

discountPrices([100,200,300], 0.5);