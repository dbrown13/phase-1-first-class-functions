function receivesAFunction(cakeRecipe) {
    console.log(cakeRecipe());
}

function grandmasChocolateCake() {
    return "mmm tasty chocolate cake"
}

receivesAFunction(grandmasChocolateCake);

function returnsANamedFunction() {
    function jabberwocky() {
        return "jabberywocky! from inside this place";
    }
    return jabberwocky;
}

function returnsAnAnonymousFunction() {
    return () => { 
        console.log("hello")
    }
}