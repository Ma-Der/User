import is from 'is_js';
import moment from 'moment';

export class Misc {
    constructor() {}

    static isInstanceValid(instance, Class) {
      if(is.falsy(instance instanceof Class)) throw new Error("Wrong instance object.");
    }

    static isStringValid(str) {
      if(is.not.string(str)) throw new Error("Argument must be a string.");
      if(is.empty(str) || is.space(str)) throw new Error("Empty string.");
    }

    static isSuperuser(user){
      if(is.not.equal(user.accessLevel, 'admin')) throw new Error("It's normal user.");
    }

    static isNormalUser(user) {
      if(is.not.equal(user.accessLevel, 'user')) throw new Error("It's a super user.");
    }

    static isUserInChatroom(user, list) {
      if(is.falsy(list.includes(user))) throw new Error("This user does not exist in this chat room.");
    }

    static passwordCheck(pass) {
        const re = /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}/;
        is.setRegexp(re, 'alphaNumeric');
        if(is.not.alphaNumeric(pass)) throw new Error("Password should have at least: 8 digits, one uppercase letter, one number, one special-sign.");
    }

    static genderCheck(gender) {
        if(is.empty(gender)) throw new Error('Empty string, choose "m" for male or "f" for female.');
        if(is.falsy((is.equal('m', gender) || is.equal('f', gender)))) throw new Error("m - stands for male, f - stands for female");
        const gen = ['male', 'female'];
        switch(gender) {
            case 'm':
                this.gender = gen[0];
                return this;
            case 'f':
                this.gender = gen[1];
                return this;
        }
    }

    static dateCheck(input) {
            
            if(is.falsy(input)) throw new Error("Argument is missing.");
                    
            switch(true) {
              case (typeof input === 'number'):
                if(is.nan(input)) throw new Error("Input should be a number.");
                if(moment().dayOfYear(input) > moment()) throw new Error("You will be born in a future. Please choose a negative number if you know how many days past since you were born.");
                if(moment().dayOfYear(input).year() < 1900) throw new Error("You can't be that old.");
                const num = moment().dayOfYear(input);

                return num.format('MM/DD/YYYY'); 
          
              case (typeof input === 'string'):
                if(moment(input).format('MM/DD/YYYY') === 'Invalid date') throw new Error("Invalid date. Date format should be - MM/DD/YYYY");
                if(moment(input).format('MM/DD/YYYY') > moment()) throw new Error("You will be born in a future. Please choose a correct date.");
                if(moment(input).year() < 1900) throw new Error("You can't be that old.");
                return moment(input).format('MM/DD/YYYY');
          
              case (moment.isDate(input)): 
                if(is.nan(input.getTime())) throw new Error("Invalid date.");
                return moment(input).format('MM/DD/YYYY');
                break;
            }
    }
}