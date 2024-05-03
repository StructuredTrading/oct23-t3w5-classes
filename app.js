// Import Library class, Book class, Audio class, Games class, Movies class, Music class

const { Book } = require("./Book");
const { Library } = require("./Library");
const { Media } = require("./Media");

// Create instances of classes

// Lord of the Rings as a instance of Book class
let lotr = new Book("fellowship of the ring", "fancy");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);



// Create a instance of a Library
// add media instances into the Library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);


// Log the data in the library
console.log(libraryInstance);

console.log(libraryInstance.books[0].name);