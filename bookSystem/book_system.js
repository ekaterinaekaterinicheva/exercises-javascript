let books = [];

function addBook() {
    // Retrieve the values entered by the user in the HTML input fields for:
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    // Check if all fields have been filled
    // Check if pagesNumber is a valid number 
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Create a book object
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        // Add this book object into the books array
        books.push(book);
        // Update the display with the newlyadded book details
        showbooks();
        // Reset all input fields to add another book
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    // Iterate through the books array, creating a new array of HTML elements
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>` // Button for editing a specific book
    );
    // Concatenate all the HTML elements generated for each book into a single string.
    // This string representation of HTML elements allows the content to be inserted as a single block of HTML.
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Allow to edit a book's details by pre-filling the form with its existing data
function editbook(index) {
    // Fetches the book from the books array using the given index
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
  }

  function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}


