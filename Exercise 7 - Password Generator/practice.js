class Password {
    constructor(password){
        this.password = password;
        this.LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        this.UpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.NumbersChars = '0123456789';
        this.SpecialSymbols = '!@#$%^&*()_+-=';
        this.allChars = this.LowerCaseChars + this.UpperCaseChars + this.NumbersChars + this.SpecialSymbols;
    }

    getRandomChar(chars){
        return chars[Math.floor(Math.random() * chars.length)];
    }

    GenerateStrongPassword(num){
        if(num>5 && num<=12){
            let password = [];

            password.push(this.getRandomChar(this.LowerCaseChars));
            password.push(this.getRandomChar(this.UpperCaseChars));
            password.push(this.getRandomChar(this.NumbersChars));
            password.push(this.getRandomChar(this.SpecialSymbols));

            for(let i=4; i<num; i++){
                password.push(this.getRandomChar(this.allChars));
            }

            password = password.sort(()=> 0.5 - Math.random());

            console.log("Generated Strong Password: " + password.join(''));
        } else {
            console.log("Password limit must be between greater than 5 and equal to 12");
        }
    }

    GenerateWeakPassword(num){
        if(num<=5){
            let password = [];
            password.push(this.getRandomChar(this.LowerCaseChars));
            password.push(this.getRandomChar(this.UpperCaseChars));
            password.push(this.getRandomChar(this.SpecialSymbols));

            for(let i=3; i<num; i++){
                password.push(this.getRandomChar(this.allChars));
            }

            password = password.sort(()=> 0.5 - Math.random());
            console.log("Generated Weak Password: " + password.join(''));
        } else {
            console.log("Password limit must be between 1 to 5");
        }

    }

}

const p1 = new Password(0);
const p2 = new Password(0);

p1.GenerateStrongPassword(11);
p2.GenerateWeakPassword(4);