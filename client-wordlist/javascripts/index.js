
document.addEventListener('DOMContentLoaded', function () {

    Category.loadAllIntoSelect();

    Word.loadAllWords(); // send an ajax call to rails to fetch all of the words
    getForm().addEventListener('submit', Word.createFromForm);
});

function initializeSelect(){
        $('select').formSelect();
}


const getForm = () => document.getElementById("word-form");
    const getWord = () => document.getElementById('word');
    const getDefinition = () => document.getElementById('definition');
    const getSentence = () => document.getElementById('sentence');
    const getCategory = () => document.getElementById('category');
    const getWordDisplay=() => document.getElementById('word-display');
    // display area
const getWordList = () => document.querySelector('div.word-list');

function resetInput() {
    getWord().value = '';
    getDefinition().value = '';
    getSentence().value = '';
    getCategory().value= '';
    getWordDisplay().innerHTML="";
}