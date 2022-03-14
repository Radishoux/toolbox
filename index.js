function toolbox() {
    var mapArray = [1, 2, 3, 4, 5];
    var filterArray = [1, 2, 3, 4, 5];
    var reduceArray = [1, 2, 3, 4, 5];
    var array = [1, 2, 3, 4, 5];
    var timeTimeout = 1000;
    var helloTimeout = "Goodbye Timeout";


    console.log("Hello Timeout");
    var postTimeout = setTimeout(function() {
        console.log(helloTimeout);
        timeTimeout = 1;
    }, timeTimeout);

    var postPromise = new Promise(function(resolve, reject) {
        console.log("Hello Promise");
        if (timeTimeout == 1000) {
            resolve("Goodbye Promise");
        }

        // else {
        //     reject(Error("It broke"));
        // }

    }); // Hello Promise
    postPromise.then(function(result) {
        console.log(result);
    }, function(err) {
        console.log(err);
    }); //Goodbye Promise

    var i = 0;
    for (i; i < array.length; i++) {
        const element = array[i];
    } //5

    var o = 0;
    while (o < array.length) {
        const element = array[o];
        o++
    } //5

    var postMap = array.map(function(element) {
            return element * 2;
        }) // [2, 4, 6, 8, 10]

    var postFilter = array.filter(function(element) {
            return (element % 2 == 0);
        }) // [2, 4, 6, 8]

    var initialValue = 1;
    var postReduce = reduceArray.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue
        }, initialValue) //16

    var phrase = "0";
    if (isNaN(phrase)) {
        console.log('<<', phrase, '>>', 'is not a Number!');
    } else {
        console.log('<<', phrase, '>>', 'is a Number!');
    }

    console.log(i); //5
    console.log(o); //5
    console.log(postMap); // [2, 4, 6, 8, 10]
    console.log(postFilter); // [2, 4, 6, 8]
    console.log(postReduce); //16
    console.log(10 / 0); //Infinity
    console.log(10 / "Apple"); //NaN
    console.log((10 / 0) == Infinity); //true
    console.log((10 / "Apple") == NaN); //false
    console.log(escape("äöü")); // "%E4%F6%FC"


    // console.log(postTimeout); Timeout {...}
    // console.log(postPromise); Promise { <pending> }
}

toolbox();