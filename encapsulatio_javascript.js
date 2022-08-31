let validation = () => {

    let pattern
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
            if (pattern === undefined) {
                return returnCode.patternErr
            }
            ok = pattern.test(input)
            if (ok) {
                return returnCode.valid
            } 
            return returnCode.invalid
            
        }
    }

    return validator
}

// encapsulation
// closure

// git



let validateEmail = validation()

validateEmail.setPattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
let result = validateEmail.validate("dinhtatatuanlinh@gmail.com")


let validatePhone = validator()
validatePhone.setPattern()




// private
// class
class Car {
    static color = "red"
    #numberOfWheel = 4
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

let toyota = new Car("toyota")
console.log(Car.color)
toyota.getNumberOfWheel()
console.log(typeof toyota)
