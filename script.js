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

    getKeyByValue(value) {
        return Object.keys(this).find(key => this[key] === value) //where object = this
    }
}

const test = new EnglishText("cab a bed")

console.log(test.getKeyByValue("."))

// let translatedWord = []
// for (let i = 0; i < this.text.length; i++) {
//     let letter = this.text.charAt(i)
//     translatedWord.push(this[letter])
// }
// return translatedWord.join(" ")