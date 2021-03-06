/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
var four_m = 4 * 1000 * 1000

var fibo = {
    a : 1,
    b : 1,
    next : function(){
        var sum = this.a + this.b;
        this.a = this.b;
        this.b = sum;
        return sum;
    },
    b_is_even : function(){
        if (this.b %2 == 0) {
            return true;
        } else {
            return false;
        }
    },
};

function find_fibo(t_max) {
    var sum = 0;
    var re = fibo.next();
    while (re < t_max) {
        if (fibo.b_is_even()) {
            sum += fibo.b
        }
        re = fibo.next()
    }
    return sum
}
var ret = find_fibo(four_m);
console.log(ret);
