let message: string = "Igor Laur"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteCar: string // posso tirar string, porém ele não me mostrará onde está o erro e passará o último valor por cima
favoriteCar = 'Mustang'
// favoriteCar = 11
console.log("My favorite car is " + favoriteCar)


let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} to go to the other world? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'} `)

// Arrow function
let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')
// End

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)