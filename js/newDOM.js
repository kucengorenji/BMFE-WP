const UNCOMPLETED_LIST_BOOK = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK = "completeBookshelfList";
const BOOK_ITEMID = "bookId";

// create button function
const createButton = (buttonTypeClass, eventListener) => {
    const button = document.createElement("button")
    button.innerText = "hahha";
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", (event) => {
        eventListener(event);
    })

    return button;
}

const deleteRead = () => {
    return createButton("red", (event) => {
        hapusBuku(event.target.parentElement)
    })
}

const completeRead = () => {
    return createButton("green", (event) => {
        selesaiDibaca(event.target.parentElement)
    })
}

const undoReadButton = () => {
    return createButton("green", (event) => {
        belumSelesaiDibaca(event.target.parentElement)
    })
}

//  create card
const createBookCard = (title, author, year) => {

    const bookTitle = document.createElement("h3");
    bookTitle.innerText = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Penulis: ${author}`;

    const bookYear = document.createElement("p");
    bookYear.innerText = `Tahun: ${year}`

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("action");
    buttonContainer.append(deleteRead());
    buttonContainer.append(completeRead());
    buttonContainer.append(undoReadButton());

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.append(bookTitle, bookAuthor, bookYear, buttonContainer)

    return container;
}

// submit form function

const submitForm = () => {
    const uncompletedBookList = document.getElementById(UNCOMPLETED_LIST_BOOK);
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK)

    title = document.getElementById("inputBookTitle").value;
    author = document.getElementById("inputBookAuthor").value;
    year = document.getElementById("inputBookYear").value;
    isRead = document.getElementById("inputBookIsComplete").checked;

    bookCard = createBookCard(title, author, year, isRead);

    if (isRead) {
        listCompleted.append(bookCard);
    } else {
        uncompletedBookList.append(bookCard);
    }
    
}


// BOOK LOGIC

const selesaiDibaca = (bookCard) => {
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK)
    
    const cardTitle = bookCard.parentElement.querySelector("h3").innerText;
    const cardAuthor = bookCard.parentElement.querySelector("article > p").innerText;
    const cardYear = bookCard.parentElement.querySelector("article > p").innerText;

    console.log(cardTitle)

    const movedCard = createBookCard(cardTitle, cardAuthor, cardYear);
    listCompleted.append(movedCard);

    bookCard.parentElement.remove();
}

const hapusBuku = (bookCard) => {
    bookCard.parentElement.remove();
}

const belumSelesaiDibaca = (bookCard) => {
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_BOOK);
    
    const cardTitle = bookCard.parentElement.querySelector("h3").innerText;
    const cardAuthor = bookCard.parentElement.querySelector("article > p").innerText;
    const cardYear = bookCard.parentElement.querySelector("article > p").innerText; 

    const movedCard = createBookCard(cardTitle, cardAuthor, cardYear);
    listUncompleted.append(movedCard);

    bookCard.parentElement.remove();
}

