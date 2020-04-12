var app = new Vue({
    el: '#app',
    data:{
        password: '',
        score: 0,
        messsage: 'very weak',
        messages: [
            'very weak',
            'very weak',
            'weak',
            'mediuam',
            'strong',
            'very strong'
        ],

    },
    methods: {
        evaluateScore: function() {
            let newScore = 0;
            
            newScore += this.hasSmallLetter();
            newScore += this.hasUpperLetter();
            newScore += this.hasDigit();
            newScore += this.hasSpecialChar();
            newScore += this.isLongEnough();

            // newScore = [       {alternative method to write code much more clean and compact.}
            //     this.hasSmallLetter,
            //     this.hasUpperLetter,
            //     this.hasDigit,
            //     this.hasSpecialChar,
            //     this.isLongEnough
            // ].reduce((score, func) => score + func(), 0);

            this.score = newScore;

            this.message = this.messages[newScore];
        },
        hasSmallLetter: function() {
            return /[a-z]/.test(this.password);
        },
        hasUpperLetter: function() {
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function() {
            return /[0-9]/.test(this.password);
        },
        hasSpecialChar: function() {
            return /[^a-zA-Z0-9]/.test(this.password);
        },
        isLongEnough: function() {
            return this.password.length >= 8;
        }
        
    }
});