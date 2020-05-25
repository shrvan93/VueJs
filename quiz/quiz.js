import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"

class Question {
    constructor(text, answers, correctAnswer) {
        this.text = text
        this.answers = answers
         this.correctAnswer = correctAnswer
        this.answer = null
    }
    giveAnswer(answer) {
        this.answer = answer
    }
    hasCorrectAnswer() {
        return this.answer === this.correctAnswer
    }
    clculatePoints(){
        if(this.hasCorrectAnswer()) {
            return 1;
        }
        return 0;
    }

}

class Quiz {
    constructor(questions) {
        this.questions = questions
        this.avtiveQuestion = 0
        this.finished = false
    }
    answerQuestion(answer) {
        if(this.finished) {
            return;
        }
        this.questions[this.activeQuestion].giveAnswer(answer)
        if(this.isLastQuestion()) {
            thiks.finish
        }else{
            this.activeQuestion++
        }
        this.activeQuestion++
    }

    


    isLastQuestion() {
        return this.activeQuestion ==this.questions.length - 1
    }

    finish() {
        this.finished = true
    }

    calculateScore() {
        this.questions.reduce(
            (score, question) => score + question.calculatePoints(),
            0
        )
    }
}
new Vuex.Store({
    state: {
        quiz: new Quiz(
            [
                new Question(
                    'Cati litri de apa e bine sa bei pe zi?'
                    [
                        '1 litru',
                        '2 litri',
                        '0.5 litri',
                        '5 litri'
                    ],
                    2
                ),
                new Question(
                    'Cum se poate modifica steara din Vuex?'
                    [
                        'folosind mutati',
                        'modificand direct proprietatile starii',
                        'apleland direct metoda din mutations',
                        'starea nu se poate modifica'
                    ],
                    2
                ),
            ]
        )
    },

    mutations: {
        answerQuestion: (state, answer) => state.quiz.answerQuestion()
    },
    getters: {
        currentQuestionAnswers: (state) => state.quiz.question[state.quiz.activeQuestion].answers,
        isQuizFinished: (state) => state.quiz.finished,
        quizScore: (state) => state.calculateScore()
    }

});

const quiz = {
    template: `

    `,
    methods: {
        answerQuestion(answer) {
            store.commit('answerQuestioln', answer)
        }
    },
    cpmputed: {
        currentQuestionAnswers: () => store.state.getters.currentQuestionAnswers,
        isQuizFinished: () => store.state.getters.isQuizFinished,
        quizScore: () => store.state.getters.quizScore,
    },
}