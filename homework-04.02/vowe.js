const VOWELS = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
function num_vowel(text){
    let len = text.length
    let vowel = 0
    let consonant = 0
    for (let i = 0; i <= len; i++){
        let charcode_text = text.charCodeAt(i)
        if (((charcode_text >= 65) && (charcode_text <= 90)) || ((charcode_text >= 97) && (charcode_text <= 122))){
            if (VOWELS.includes(text[i])){
                vowel++
            }else{
                consonant++
            }
        }
    }
    console.log(`count vowels:\t\t${vowel}\ncount consonants:\t${consonant}`)
}
num_vowel("hdhifaaqqqaaa")