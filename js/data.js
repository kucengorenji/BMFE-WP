const STORAGE_KEY = "BOOK_LIBRARY";

let library = [];

function isStorageExist() /* boolean */ {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    }
    return true;
 }

 function saveData() {
    const parsed = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
 }