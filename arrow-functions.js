const double = (arr) => { 
    arr.map( (val) => { val * 2 } )
};

const squareAndFindEvens = (numbers) => {
    numbers.map(
        (num) => { return num ** 2 }
    ).filter(
        (num) => { return num % 2 === 0 }
    )
}