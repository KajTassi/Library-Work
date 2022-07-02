function getTotalBooksCount(books) {
  return books.length;
  }
  
  function getTotalAccountsCount(accounts) {
  return accounts.length;
  };
  
  function getBooksBorrowedCount(books) {
  let result = books.filter((book) => 
    //create a variable that is filtering the books array
    book.borrows.filter((record) => 
    //create an anoynomous function that filters the books array
    record.returned === false).length > 0
    //check if the record returned is false, and return the length of the array
  );
  return result.length;
  }
  /*returns a number, that represents the number of books _that are currently
  checked out at the libraury. That number can be found by looking at the what is found in the
  borrowed array in the books array
  */
  
  function getMostCommonGenres(books) {
    let result = {};
    //we are going to define the result variable as an object
    books.forEach((book) => {
      //creating a function to sort books array
      if (result[book.genre]) {
        result[book.genre]++
  //changing result variable but adding genres that are found in array to variable
      } else {
        result[book.genre] = 1;
        //add 1 if none found
      }
    })
    return Object.entries(result).map(([name,count])=>{
      return{
        name,
        count
      };
      })
      //mapping entries and returning with the name and count of found geners
  .sort((a,b)=>b.count-a.count).slice(0,5);  
  //sorting in ascending order, the top 5 genres
    }
  
  function getMostPopularBooks(books) {
    let result = [];
  // loops through books array and creates new objects with 'name' and 'count' keys, and adds them to result
    const borrows = books.reduce((acc, book) => {
      result.push({ name: book.title, count: book.borrows.length });
    }, []);
    return topFive(result);
  }
  // function that sorts new result array array & returns the top 5
  function topFive(array) {
    let result = array
      .sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5);
  
    return result;
  }
  
  function getMostPopularAuthors(books, authors) {
    let result = [];
    authors.forEach((author) => {
    //looping authors array
    let total = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    //we are setting the total variable to the authors name values
    books.forEach((book)=> {
      if (book.authorId ===author.id) {
        //if the authors id and book author ID match, we add it to the total
        total.count += book.borrows.length;
      }
    });
      result.push(total)
      //add the total variable (all the matching books) to return an arrary for result
    });
    return result.sort((a,b) => b.count - a.count).slice(0,5);
    //sort by most popular and limit to 5
  }
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
  };