//BLOCK WORDS
findString = function findText(text) {
    if (window.find(text)) {
        document.documentElement.innerHTML = '';
        document.documentElement.innerHTML = 'This site is blocked';
        document.documentElement.scrollTop = 0;
    };
}

findString("Bubble Tea");

//BLOCK THE PARTIAL DOMAINS
findURL = function changeURL(text) {
    let current = window.location.href;
    if (current === text) {
        window.location.replace("https://youtube.com/yanjaa");
    }
}

//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(text) {
    let current = window.location.href;
    if (current.startsWith(text)) {
        document.documentElement.innerHTML = '';
        document.documentElement.innerHTML = 'Domain is blocked';
        document.documentElement.scrollTop = 0;
    }
}

findURL("https://www.quora.com/");
findAllURL("https://www.facebook.com/");