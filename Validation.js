class Validation {
    isValidFirstName(firstName) {
        if (typeof firstName !== 'string'|| firstName === '') {
        return false;}
        if (firstName.length < 2) {
            return false;
        }
        if (firstName[0] === firstName[0].toLowerCase()) {
            return false}
        if (firstName.slice(1).toLowerCase() !== firstName.slice(1)) {
            return false}
        
       return true
    }

    isValidLastName(lastName) {
        if(!this.isValidMessage(lastName)) {
        return false;
    }
        if(lastName.length < 2) {
        return false;
    }
    return true;
}

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
       if (typeof message !== 'string'|| message === '') {
        return false; }
        return true;
    } 


    isValidPhoneNumber(phoneNumber) {
        if (typeof phoneNumber !== 'number'|| phoneNumber === '' || phoneNumber.legth < 3) {
        return false } 
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;