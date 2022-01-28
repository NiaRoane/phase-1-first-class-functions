function receivesAFunction(callback) {
        callback()
};


function returnsANamedFunction() {
        return function sayHello(){
            console.log("hello")
        }
}


function returnsAnAnonymousFunction(){
    return function (){
        console.log("goodbye")
    }
}