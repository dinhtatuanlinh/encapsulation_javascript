let validation = (pt) => {
    let pattern = pt
    let returnCode = {
        patternErr: 1,
        valid: 2,
        invalid: 3,
    }

    let log = (input)=>{
        console.log(input)
    }

    let validator = {

        getPattern: () => {
            log(pattern)
            return pattern
        },
        setPattern: (pt) => {
            pattern = pt
        },
        deletePattern: () => {
            pattern = undefined
        },
        validate: (input) => {
            if (this.pattern === undefined) {
                return returnCode.patternErr
            }
            ok = pattern.test(input)
            if (ok) {
                return returnCode.valid
            } 
            return returnCode.invalid
            
        },
        getName: function(){
            console.log(this.name)
        }
    }

    return validator
}

// encapsulation
// closure

// git

let emailValidation = validation(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

let phoneValidation = validation(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)

console.log(validateEmail.pattern)
let result = validateEmail.validate("dinhtatatuanlinh@gmail.com")
console.log(result)


// let validatePhone = validator()
// validatePhone.setPattern()




// private
// class
// class Car {
//     static color = "red"
//     #numberOfWheel = 4
//     name
//     #peopleOnCar
//     constructor(name) {
//         this.name = name
//         console.log('constructor!!!')
//     }
//     static run() {
//         this.#log("run run run")
//     }
//     getNumberOfWheel() {
//         this.#log(this.#numberOfWheel)
//     }
//     setPeopleOnCar(numPeople) {
//         if (numPeople <= 5) {
//             this.#peopleOnCar = numPeople
//         }
//     }

//     #log(input) {
//         console.log(input)
//     }
// }

// let toyota = new Car("toyota")
// console.log(Car.color)
// toyota.getNumberOfWheel()
// console.log(typeof toyota)
