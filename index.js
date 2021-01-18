function fetchBooks() {

  // fetch("https://anapioficeandfire.com/api/books")
  // .then(function(response){
  //   return response.json();
  // })
  // .then(function(books){
  //   renderBooks(books)
  // }) 


  
    return fetch("https://anapioficeandfire.com/api/books")
      .then(resp => resp.json())
      .then(json => renderBooks(json))
  
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    // const h5 = document.createElement('h5')
    h2.innerHTML = book.name
    // h5.textContent = `${book.name}'s Total Page Count: ${book.numberOfPages}`
    main.append(h2)
 

  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
