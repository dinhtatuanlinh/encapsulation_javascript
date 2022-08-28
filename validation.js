let validation = (name) => {
    let nameValidation
    nameValidation = name

    let pattern
    let returnCode = {
        patternErr: 1,
        valid: 2,
        invalid: 3,
    }

    const validator = {
        nameValidator: nameValidation,
        getPattern: () => {
            return pattern
        },
        setPattern: (pt) => {
            pattern = pt
        },
        deletePattern: () => {
            pattern = ''
        },
        validate: (input) => {
            if (pattern === undefined) {
                return returnCode.patternErr
            }
            ok = pattern.test(input)
            if (ok) {
                return returnCode.valid
            } else {
                return returnCode.invalid
            }
        }
    }

    return validator
}



// encapsulation
// closure





let validateEmail = validation("valdateEmail")
console.log(validateEmail.nameValidator)
console.log(typeof validateEmail)

validateEmail.setPattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
let result = validateEmail.validate("dinhtatatuanlinh@gmail.com")
console.log(result)
// private
// class
class Car {
    static color = "red"
    #umberOfWheel = 4
    name
    #peopleOnCar
    constructor(name) {
        this.name = name
    }
    static run() {
        this.#log("run run run")
    }
    getNumberOfWheel() {
        this.#log(this.#numberOfWheel)
    }
    setPeopleOnCar(numPeople) {
        if (numPeople <= 5) {
            this.#peopleOnCar = numPeople
        }
    }

    #log(input) {
        console.log(input)
    }
}

// let toyota = new Car("toyota")
console.log(Car.color)

console.log(Car.run())
// console.log(typeof toyota)