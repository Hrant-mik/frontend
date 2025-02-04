function num_vowel(text){
    let len = text.length
    let vowel = 0
    let consonant = 0
    for (let i = 0; i >= len; i++){
        if (text[i] in "aeiouyAEIOUY"){
            vowel += 1
        }else if (let[i] in ""){
            pass
        }
    }
    console.log(`count vowel: ${vowel}: count consonant ${consonant}`)
}
num_vowel("asd")