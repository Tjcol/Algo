function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    const vowels = "aeiouAEIOU";
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Increment length counter for every character
        length++;

        // Count vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Count words (A word is counted when a space is encountered after some characters)
        if (char === ' ') {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }

    // If the last character was not a space, count the final word
    if (inWord) {
        wordCount++;
    }

    // The last character is a period ('.'), so we should not count it as part of the sentence length
    if (sentence[sentence.length - 1] === '.') {
        length--;
    }

    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

// Example usage
const sentence = "This is an example sentence.";
const result = analyzeSentence(sentence);
console.log(`Length: ${result.length}`);
console.log(`Number of words: ${result.wordCount}`);
console.log(`Number of vowels: ${result.vowelCount}`);
