let gmailPrice = 10;
let couponsTen = {
    "10Release": 10,
    "GmailPro2024": 10
};

function redeemCoupon(couponsTen, gmailPrice) {
    let inputCoupon = document.querySelector('input').value; 
    
    if(couponsTen[inputCoupon]){
        let discount = couponsTen[inputCoupon];
        let discountedPrice = gmailPrice - (gmailPrice * (discount / 100));
        document.getElementById('gPrice').innerText = discountedPrice;
        alert("Congratulations! You got a 10% discount!")
    } else {
        alert("Invalid Coupon");
    }
}

document.querySelector('input').addEventListener('change', function() {
    redeemCoupon(couponsTen, gmailPrice);
});
