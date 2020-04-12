class Word {
    static all = [];

    constructor(data) {
        this.id = data.id;
        this.word = data.word;
        this.definition = data.definition;
        this.sentence = data.sentence;
        this.category=data.category.name;
        this.category_id=data.category.id;
        this.save();
    }

    save() {
        Word.all.push(this);
    }

    template() {
        return `
        <div class="card">
          <div class="card-content">
            <a href="#" class="card-title">${this.word}</a>
            <p>Category: ${this.category} Word List. </p>
            <p>Definition: ${this.definition}</p>
            <p>Sentence: ${this.sentence} </p>
          </div>
        </div>
      `
    }

    render() {
        getWordList().innerHTML += this.template();
    }

    static renderWords() {
        Word.all.forEach(word => word.render())
    }

    static createFromForm(e) {
        e.preventDefault();

        const word = getWord().value;
        const definition = getDefinition().value;
        const sentence = getSentence().value;
        const category_id = getCategory().value;

        let strongParams = {
            word: {
                word: word,
                definition: definition,
                sentence: sentence,
                category_id: category_id
            }
        };
debugger;
        API.post('/words', strongParams)
            .then(data => {
                let word = new Word(data);
                word.render();
                resetInput();
            })
    }

    static load() {
        // fetch, sends a GET request by default
        API.get('/words')
            .then(function (words) { // data is an array of blogs
                words.forEach(data => new Word(data));
                Word.renderWords();
            })
            .catch(errors => console.log(errors));
    }
}