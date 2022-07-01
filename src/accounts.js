function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id===id);
}
//returns the account object that has the matching ID

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA,nameB)=> {
const lastNameA = nameA.name.last;
const lastNameB = nameB.name.last;
return lastNameA.toLowerCase() > lastNameB.toLowerCase() ? 1 : -1;
});
}
//has a single parameter that is an array of account objects. 
//it returns objects sorted by alphabetically (descending) by account.last

function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let result = 0;
  books.forEach(book => book.borrows.forEach(out => accId === out.id && result++));
  return result;
}

/*takes in two pre-defined parameters in the following order...
an account object & an array of all book objects
then it returns a number that represents the amount of times the accounts ID appears*/

 // should return all of the books taken out by an account with the author embedded
 function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      result.push(book);
    }
    //If statement is, if a book in the book array has been borrowed, and the item id
    //is been borrowed by an account ID and the item has not been returned;
    //a results array has been created with those books
  })
  console.log(result);
  result.forEach(book=>{
    //forEach is looping the array of result (missing books)
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return result;
}

/*has 3 parameters in the following order....
-an account Object
-an array of all book objects
-an array of all author objects
and reutnrs an array of book ojects including author information that represents books 
_currently checked out_ by the given account. */


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
