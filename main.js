const heroH1 = document.getElementById('heroH1');
const introWords = ["Welcome to anonymeta", "Leave No Trace"];

function typeWrite(words, typeSpeed) {
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        for (let j = 0; j <= words[i].length; j++) {
            setTimeout(() => {
                heroH1.innerHTML = currentWord.substring(0, j);
            }, typeSpeed);
        }

        typeSpeed += 2000;
        
        setTimeout(() => {
            heroH1.innerHTML = '';
        }, typeSpeed - 500);
    }
}

typeWrite(introWords, 2000);