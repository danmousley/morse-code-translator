class EnglishText {
    constructor(text) {
        this.text = text
        this.a = ".-"
        this.b = "-..."
        this.c = "-.-."
        this.d = "-.."
        this.e = "."
        this.f = "..-."
        this.g = "--."
        this.h = "...."
        this.i = ".."
        this.j = ".---"
        this.k = "-.-"
        this.l = ".-.."
        this.m = "--"
        this.n = "-."
        this.o = "---"
        this.p = ".--."
        this.q = "--.-"
        this.r = ".-."
        this.s = "..."
        this.t = "-"
        this.u = "..-"
        this.v = "...-"
        this.w = ".--"
        this.x = "-..-"
        this.y = "-.--"
        this.z = "--.."
    }

    getMorseTranslation() {
        const englishTextArr = this.text.split(' ')

        const morseTextArr = englishTextArr.map((englishWord) => {
            let morseWord = []
            for(let i = 0; i < englishWord.length; i++) {
                let letter = englishWord.charAt(i)
                morseWord.push(this[letter])
            }
            return morseWord.join(' ')
        })

        return morseTextArr.join(' / ')
    }
}

class MorseText extends EnglishText {
    constructor(text) {
        super(text)
    }

    getEnglishTranslation() {
        const morseWordsArr = this.text.split(' / ')
        let englishWordsArr = morseWordsArr.map((morseWord) => {
            let morseLetters = morseWord.split(' ')
            let englishLetters = morseLetters.map((morseLetter) => {
                return Object.keys(this).find(englishLetter => this[englishLetter] === morseLetter)
            })
            return englishLetters.join('')
        })

        return englishWordsArr.join(" ")
    }
}

const test = new EnglishText("cab a bed")
const morseTest = new MorseText("-.-. .- -")

console.log(morseTest.getEnglishTranslation())