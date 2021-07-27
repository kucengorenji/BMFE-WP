const STORAGE_KEY = "BOOK_LIBRARY";

let library = [];

function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser tidak mendukung local storage");
        return false
    }
    return true;
 }

 function turnToLocalStorage() {
    const parsed = JSON.stringify(library);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
 }

 function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    
    let data = JSON.parse(serializedData);
    
    if(data !== null)
        library = data;
  
    document.dispatchEvent(new Event("ondataloaded"));
 }

 function updateDataToStorage() {
    if(isStorageExist())
        turnToLocalStorage();
 }

 function composeLibraryObject(title, author, year, isRead) {
    return {
        id: +new Date(),
        title,
        author,
        year,
        isRead
    };
 }

 function findCard(bookId) {
    for(card of library){
        if(card.id === bookId)
            return card;
    }
    return null;
 }

 function findCardIndex(bookId) {
    let index = 0
    for (card of library) {
        if(card.id === bookId)
            return index;
  
        index++;
    }
  
    return -1;
 }

