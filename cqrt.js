// CQRT - Faster Square Roots, in a small file.
var a = new Uint16Array(8388608);
for (var i = 0; i < 8388608; i++) a[i] = Math.sqrt(i);

Math.cqrt = function(n) {
    return n < 8388608 ? a[n >>> 0] : Math.sqrt(n);
}
