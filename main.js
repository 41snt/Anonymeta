const heroH1 = document.getElementById('heroH1');

const introWords = ["Welcome to anonymeta", "Leave No Trace"];

function siteIntroduction() {
    let delay = 0;

    for (let i = 0; i < introWords.length; i++) {
        let currentWord = introWords[i];

        for (let j = 0; j < currentWord.length; j++) {
            setTimeout(() => {
                heroH1.innerHTML += currentWord.charAt(j);
            }, delay);

            delay += 100;
        }

        delay += 1000;

        setTimeout(() => {
            heroH1.innerHTML = " ";
        }, delay);
    }
}

siteIntroduction();