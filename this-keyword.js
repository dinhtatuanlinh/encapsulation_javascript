// tạo 1 class validation dữu liệu
// từ class tạo ra 1 instance và instance đấy chỉ có thể validate email
// và tạo 1 instance khác của class đó chỉ có thể validate phone
// phải ứng dụng constructor

function Validation(pt){

    let pattern 
    let returnCode = {
        patternErr: 1,
        valid: 2,
        invalid: 3
    }
    pattern = pt
    console.log('abce')


    this.getPattern= () => {
        return pattern
    }
    this.setPattern= (pt) => {
        pattern = pt
    }
    this.deletePattern =  () => {
        pattern = undefined
    }
    this.validate = (input) =>{
        if(pattern == undefined){
            return returnCode.patternErr
        }
        ok = pattern.test(input)
        if (ok){
            return returnCode.valid
        }
        return returnCode.invalid
    }
}

let emailValidate = new Validation(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
let phoneValidate = new Validation(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)