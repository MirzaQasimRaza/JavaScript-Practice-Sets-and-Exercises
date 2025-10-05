class Password {
    constructor(password) {
        console.log("Welcome to Password Generator.");
        this.password = password;
        this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
        this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.specialcase = '!@#$%^&*()_+';
        this.allChars = this.lowercase + this.uppercase + this.specialcase;
    }

    getRandomChar(chars) {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    generateStrongPassword(num) {
        if (num >= 5 && num <= 10) {
            let password = [];

            // Ensure at least one of each type
            password.push(this.getRandomChar(this.lowercase));
            password.push(this.getRandomChar(this.uppercase));
            password.push(this.getRandomChar(this.specialcase));

            // Fill remaining characters
            for (let i = 3; i < num; i++) {
                password.push(this.getRandomChar(this.allChars));
            }

            // Shuffle the password characters
            password = password.sort(() => 0.5 - Math.random());

            console.log("Generated Strong Password:", password.join(''));
        } else {
            console.log("The number limit must be between 5-10 for strong password.");
        }
    }

    generateWeakPassword(num) {
        if (num < 5) {
            let password = [];

            // Weak password: just lowercase + special + uppercase
            for (let i = 0; i < num; i++) {
                password.push(this.getRandomChar(this.lowercase + this.specialcase));
            }

            console.log("Generated Weak Password:", password.join(''));
        } else {
            console.log("The number limit must be less than 5 for weak password.");
        }
    }
}

// Example usage:
const p = new Password();
p.generateStrongPassword(10);  // Will generate a strong password
p.generateWeakPassword(4);     // Will generate a weak password
