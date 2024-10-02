let gmailPrice = 10;
let coupons = {
    "10Release": 10,
    "GmailPro2024": 20,
    "CISHZ": 30,
    "S201A": 40
};

function redeemCoupon(coupons, gmailPrice) {
    let inputCoupon = document.querySelector('input').value; 
    
    if(coupons[inputCoupon]){
        let discount = coupons[inputCoupon];
        let discountedPrice = gmailPrice - (gmailPrice * (discount / 100));
        document.getElementById('gPrice').innerText = discountedPrice;
        alert(`Congratulations! You got a ${coupons[inputCoupon]}% discount!`);
    } else {
        alert("Invalid Coupon");
    }
}

document.querySelector('input').addEventListener('change', function() {
    redeemCoupon(coupons, gmailPrice);
});
