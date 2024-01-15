function Book(title, author, num_pages, read) {
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.read = read;
  this.info = function () {
    read_text = read ? "read" : "not read"
    console.log(`${this.title} by ${this.author}, ${this.num_pages} pages, ${read_text}`)
  }
}