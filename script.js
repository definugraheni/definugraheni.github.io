const textElement = ['Cute', 'Full Stak Developer', 'Sok Asik People'];
let count = 0;
let texIndex = 0;
let currentText = '';
let words = '';

(function typing(){
    if(count == textElement.length){
        count = 0
    }

    currentText = textElement[count];

    words = currentText.slice(0, ++texIndex);
    document.querySelector('.typing-effect').innerHTML = words;
    
    if(words.length == currentText.length){
        count++;
        texIndex = 0;
    }
    setTimeout(typing,400);
})()