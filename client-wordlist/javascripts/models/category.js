class Category {
    static all = [];

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.save();
    }

    save() {
        Category.all.push(this);
    }

    template() {
        return `
        <div class="card">
          <div class="card-content">
            <p>Category: ${this.name} Word List. </p>
          </div>
        </div>
      `
    }

    render() {
        getCategoriesDropDown().innerHTML += this.template();
    }

    static renderCategories() {
        Category.all.forEach(category => category.render())
    }



    static load() {
        // fetch, sends a GET request by default
        API.get('/categories')
            .then(function (categories) { // data is an array of blogs
                categories.forEach(data => new Category(data));
                Category.renderCategories();
            })
            .catch(errors => console.log(errors));
    }
}