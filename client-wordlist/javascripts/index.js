document.addEventListener('DOMContentLoaded', function () {
    Word.load(); // send an ajax call to rails to fetch all of the words
    getForm().addEventListener('submit', Word.createFromForm);
});

const getForm = () => document.getElementById("word-form");
    const getWord = () => document.getElementById('word');
    const getDefinition = () => document.getElementById('definition');
    const getSentence = () => document.getElementById('sentence');
    const getCategory = () => document.getElementById('category_id');
    // display area
const getWordList = () => document.querySelector('div.word-list');

function resetInput() {
    getWord().value = '';
    getDefinition().value = '';
    getSentence().value = '';
    getCategory().value= '';
}