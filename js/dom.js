const INCOMPLETED_BOOK_LIST_ID = "incompleteBookshelfList";
const COMPLETED_BOOK_LIST_ID = "completeBookshelfList";
const BOOK_ITEMID = "bookId";


function createBookCard(title, author, year,) {
    // add article detail element
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Penulis: ${author}`;

    const bookYear = document.createElement("p");
    bookYear.innerText = `Tahun: ${year}`
    

    // add action button element
    const greenButton = document.createElement("button")
    greenButton.classList.add("green");
    greenButton.innerText = "Selesai dibaca";

    const redButton = document.createElement("button")
    redButton.classList.add("red");
    redButton.innerText = "Hapus buku";

    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action")
    actionContainer.append(greenButton, redButton);
    
    // create article element and return
    const article = document.createElement("article");
    article.classList.add("book_item")
    article.append(bookTitle, bookAuthor, bookYear, actionContainer);

    return article;
}

function createButton(buttonType, eventListener) {
    const button = document.createElement("button")
    button.classList.add(buttonType)
    button.addEventListener("click", (event) => {
        eventListener(event)
    })
}

const isRead

function isCompleted() {
    const isComplete = document.getElementById("inputBookIsComplete").value;
    if (isComplete) {
        greenButton.innerText = "Selesai dibaca";
    } else {
        greenButton.innerText = "Belum dibaca";
    }
}

function submitBook() {
    const uncompletedBookList = document.getElementById(INCOMPLETED_BOOK_LIST_ID);
    const completedBookList = document.getElement(COMPLETED_BOOK_LIST_ID);
    // get value from the form
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const isComplete = document.getElementById("inputBookIsComplete").value;

    const inputToLibrary =  createBookCard(bookTitle, bookAuthor, bookYear);
    console.log(inputToLibrary)

    if(isComplete) {
        addToRead();
    } else {
        doneRead();
    }

    uncompletedBookList.append(inputToLibrary);
}

// ======================== unclear yet =============================================

function addToComplete() {
    const completedBookList = document.getElementById(COMPLETED_BOOK_LIST_ID);
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

    const newTodo = createBookCard(taskTitle, taskTimestamp, true);

    listCompleted.append(newTodo);
    taskElement.remove();
}

function removeFromCompleted() {
    taskElement.remove();
}

function undoFromCompleted() {
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

    const newTodo = makeTodo(taskTitle, taskTimestamp, false);

    listUncompleted.append(newTodo);
    taskElement.remove();
}


