// this keyword
function Validation(input) {

    let pattern
    let returnCode = {
        patternErr: 1,
        valid: 2,
        invalid: 3,
    }
    
    this.name = input

    this.getPattern = () => {
        return pattern
    }
    this.setPattern = (pt) => {
        pattern = pt
    }
    this.deletePattern = () => {
        pattern = undefined
    }
    this.validate = (input) => {
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

let emailValidation = new Validation("email")
emailValidation.name = "phone"
console.log(emailValidation.name)
console.log(emailValidation.getPattern())
// let foo = ()=>{
//     console.log(typeof this)
// }
// foo()
// function boo(){
//     console.log(typeof this)
// }
// boo()