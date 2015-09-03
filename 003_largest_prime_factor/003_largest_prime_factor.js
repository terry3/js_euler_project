/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var number = 600851475143;
var relist = [];

var prime_num = {
    n : 3,
    is_prime : function(){
        var n2 = parseInt(this.n / 2);
        while ((this.n % n2) !== 0) {
            n2 -= 1;
        };
        if (n2 == 1) {
            return true;
        } else {
            return false;
        }
    },
    next : function(){
        this.n += 2;
        // console.log(this.is_prime());
        while (!(this.is_prime())) {
            this.n += 2;
        }
        return this.n;
    }
};

function is_prime(n) {
    var n2 = 0;
    if (n == 1) {
        return true;
    }
    n2 = n / 2;
    while (n % n2 != 0) {
        n2 -= 1;
        if (n2 == 1) {
            return true;
        } else {
            return false;
        }
    }
};

function find_largest_prime(number) {
    var prime = 0;
    prime = prime_num.next();
    t_number = number;
    while (true) {
        if (is_prime(t_number)) {
            break;
        }
        prime = prime_num.next();
        if (t_number % prime == 0) {
            relist.push(prime);
            t_number = t_number / prime;
        }
    }
};

find_largest_prime(number);

relist.sort(function(a, b){
    return a - b;
});
console.log(relist.pop());
