let countF = 'Fizz'
let countB = 'Buzz'
for (let count = 1; count < 101; count++) {
    if (count % 3 === 0){
        console.log(countF+countB)
    } else if (count % 5 === 0) {
        console.log(countF+countB)
    }
    console.log(count)
}