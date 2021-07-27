const UNCOMPLETED_LIST_BOOK = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK = "completeBookshelfList";
const BOOK_ITEMID = "bookId";

const createButton = (buttonTypeClass, text,  eventListener) => {
    const button = document.createElement("button")
    button.innerText = text;
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", (event) => {
        eventListener(event);
    })

    return button;
}

const deleteRead = () => {
    return createButton("red", "Hapus", (event) => {
        hapusBuku(event.target.parentElement)
    })
}

const completeRead = () => {
    return createButton("green", "selesai Dibaca", (event) => {
        selesaiDibaca(event.target.parentElement)
    })
}

const undoRead = () => {
    return createButton("green", "belum selesai Dibaca", (event) => {
        belumSelesaiDibaca(event.target.parentElement)
    })
}

const createBookCard = (title, author, year, isRead) => {

    const bookTitle = document.createElement("h3");
    bookTitle.innerText = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author")
    bookAuthor.innerText = `${author}`;

    const bookYear = document.createElement("p");
    bookYear.classList.add("year");
    bookYear.innerText = `${year}`

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("action");
    
    if(isRead) {
        buttonContainer.append(undoRead());
    } else {
        buttonContainer.append(completeRead());
    }
    buttonContainer.append(deleteRead());

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.append(bookTitle, bookAuthor, bookYear, buttonContainer)

    return container;
}

const submitForm = () => {
    const uncompletedBookList = document.getElementById(UNCOMPLETED_LIST_BOOK);
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK)

    title = document.getElementById("inputBookTitle").value;
    author = document.getElementById("inputBookAuthor").value;
    year = document.getElementById("inputBookYear").value;
    isRead = document.getElementById("inputBookIsComplete").checked;

    const bookCard = createBookCard(title, author, year, isRead);
    const bookCardObject = composeLibraryObject(title, author, year, isRead)

    bookCard[BOOK_ITEMID] = bookCardObject.id;
    library.push(bookCardObject);

    if (isRead) {
        listCompleted.append(bookCard);
        updateDataToStorage();
    } else {
        uncompletedBookList.append(bookCard);
        updateDataToStorage();
    }
}

const selesaiDibaca = (bookCard) => {
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK)
    
    const cardTitle = bookCard.parentElement.querySelector("h3").innerText;
    const cardAuthor = bookCard.parentElement.querySelector("article > .author").innerText;
    const cardYear = bookCard.parentElement.querySelector("article > .year").innerText;

    const movedCard = createBookCard(cardTitle, cardAuthor, cardYear, true);
    listCompleted.append(movedCard);

    const card = findCard(bookCard.parentElement[BOOK_ITEMID]);
    card.isRead = true;
    movedCard[BOOK_ITEMID] = card.id;

    bookCard.parentElement.remove();
    updateDataToStorage();
}

const hapusBuku = (bookCard) => {
    if (confirm("anda yakin ingin menghapus buku dari daftar")) {
        const cardPosition = findCard(bookCard.parentElement[BOOK_ITEMID]);
        library.splice(cardPosition, 1);

        bookCard.parentElement.remove();
        updateDataToStorage();
      }     
}

const belumSelesaiDibaca = (bookCard) => {
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_BOOK);
    
    const cardTitle = bookCard.parentElement.querySelector("h3").innerText;
    const cardAuthor = bookCard.parentElement.querySelector("article > .author").innerText;
    const cardYear = bookCard.parentElement.querySelector("article > .year").innerText;

    const movedCard = createBookCard(cardTitle, cardAuthor, cardYear, false);
    listUncompleted.append(movedCard);

    const card = findCard(bookCard.parentElement[BOOK_ITEMID]);
    card.isRead = false;
    movedCard[BOOK_ITEMID] = card.id;

    bookCard.parentElement.remove();
    updateDataToStorage();
}

function refreshDataFromFromLibrary() {
    const listUncompleted = document.getElementById(COMPLETED_LIST_BOOK);
    let listCompleted = document.getElementById(UNCOMPLETED_LIST_BOOK);
  
  
    for(card of library){
        const newCard = makecard(title, author, year, isRead);
        newCard[BOOK_ITEMID] = card.id;
  
  
        if(card.isRead){
            listCompleted.append(newCard);
        } else {
            listUncompleted.append(newCard);
        }
    }
 }