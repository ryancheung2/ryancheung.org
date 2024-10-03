let gmailPrice = 10;

let encodedCoupons = { //this is to prevent people from accessing the coupons from the console
    [btoa("10Release")]: btoa(10),       
    [btoa("GmailPro2024")]: btoa(20),
    [btoa("CISHZ")]: btoa(30),
    [btoa("S201A")]: btoa(40)
};

let discountedPrice;

function redeemCoupon(encodedCoupons, gmailPrice) {
    let inputCoupon = document.querySelector('input').value; 
    let encodedInputCoupon = btoa(inputCoupon); 
    
    if (encodedCoupons[encodedInputCoupon]) {
        let discount = atob(encodedCoupons[encodedInputCoupon]);
        let discountedPrice = gmailPrice - (gmailPrice * (discount / 100));
        document.getElementById('gPrice').innerText = discountedPrice;
        alert(`Congratulations! You got a ${discount}% discount!`);
    } else {
        alert("Invalid Coupon");
    }
}

document.querySelector('input').addEventListener('change', function() {
    redeemCoupon(encodedCoupons, gmailPrice);
});

setInterval(() => {
    encodedCoupons = {
        [btoa("10Release")]: btoa(10),
        [btoa("GmailPro2024")]: btoa(20),
        [btoa("CISHZ")]: btoa(30),
        [btoa("S201A")]: btoa(40)
    };
    if (discountedPrice < 6) {
        discountedPrice = 10;
        document.getElementById('gPrice').innerText = discountedPrice;
    }
    gmailPrice = 10;
}, 10); 
