void function(){
    const counter = function(number = 0) {
        return {
            increase() {
                number += 1;
            },
            decrease() {
                number -= 1;
            },
            value() {
                return number;
            }
        };
        let result = {
            count: function(){
                return number++
            },
            reset: function(){
                number = 0
            }
        }
        console.log(result);
        let fun = result;
        fun.count();
        fun.reset()

    }
    console.log("first call of counter function");
    let counterInst = counter();
    counterInst.increase();
    counterInst.increase();
    counterInst.increase();
    counterInst.decrease();
    console.log(counterInst.value());
    console.log("second call of counter function");
    let counterInst2 = counter(10);
    counterInst2.increase();
    counterInst2.increase();
    counterInst2.increase();
    counterInst2.decrease();
    console.log(counterInst2.value())
}()

