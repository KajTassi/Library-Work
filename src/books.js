function findAuthorById(authors, id) {
return authors.find((author)=>author.id===id);
};

//run a function that loops from authors array and passes through and matches the ID value pair


function findBookById(books, id) {
  return books.find((book)=>book.id===id)
};

//has two parameters, an array of book ojects, a string ID of a signle book object
//returns a book object with a matching ID

function partitionBooksByBorrowedStatus(books) {
 let available = [];
 // present books array
 let unavailable = [];
 //array of books that are checked out
 const result = [];
 books.forEach((book) => {
  const borrowed = book.borrows[0].returned
  //comparing borrows key value to see if they are returned
if (borrowed) {
  unavailable.push(book);
  //add unreturned books to an array; element is assumed true
} else {
  available.push(book);
  //add returned books to an array
}
});
result.push(available);
result.push(unavailable);
return result;
//return two arrays
}
//has one parameters, an array of book objects
//returns an array with two arrays inside of it, all the inputted books are present
//in either the first or second array


function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    //we are using .map to loop through the borrows array of the book we are searching
    let account = accounts.find((account)=> account.id === borrow.id);
    //we pass in an anonymous callback function that takes in the account and matches the Ids
    return { ...borrow, ...account };
    //use the spread operater that has the values of both variables
  })
.slice(0, 10);
}

//has two parameters (a book object) and the accounts array
//return an array of ten or fewer account objects that represent the accounts ID
// given by the IDs in the books borrows array
//each account object should includ the returned entry from corresponsding
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
