const UNCOMPLETED_BOOK_ID = "book";
const COMPLETED_BOOK_ID = "completed-book";
const BOOK_ITEMID = "bookId";

/* 

    id: 3657848524,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    year: 1997,
    isComplete: false,

*/

/*

        
    <!--            <article class="book_item">-->
    <!--                <h3>Book Title</h3>-->
    <!--                <p>Penulis: John Doe</p>-->
    <!--                <p>Tahun: 2002</p>--
    <!--                <div class="action">-->
    <!--                    <button class="green">Selesai dibaca</button>-->
    <!--                    <button class="red">Hapus buku</button>-->
    <!--                </div>-->
    <!--            </article>-->
        

*/

function inputBook(title, author, year) {
    
    // add article detail
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Penulis: ${author}`;

    const bookYear = document.createElement("p");
    bookYear.innerText = `Tahun: ${year}`

    // add action button
    const greenButton = document.createElement("submit")
    greenButton.classList.add("green");
    greenButton.innerText = "Selesain dibaca";

    const redButton = document.createElement("submit")
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
