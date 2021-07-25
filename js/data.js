const STORAGE_KEY = "BOOK_LIBRARY";

let library = [];

// simply check the storage key

function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser tidak mendukung local storage");
        return false
    }
    return true;
 }

//  ================================ save and load data from localStorage ======================================

 function saveData() {
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

//  ========================================================================

 function updateDataToStorage() {
    if(isStorageExist())
        saveData();
 }

//  =========================================================================

 function composeLibraryObject(title, author, year, isCompleted) {
    return {
        id: +new Date(),
        title,
        author,
        year,
        isCompleted
    };
 }

// ==========================================================================

 function findTodo(todoId) {
    for(todo of todos){
        if(todo.id === todoId)
            return todo;
    }
    return null;
 }

 function findTodoIndex(todoId) {
    let index = 0
    for (todo of todos) {
        if(todo.id === todoId)
            return index;
  
        index++;
    }
  
    return -1;
 }

//  ===============================================================

function refreshDataFromFromLibrary() {
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    let listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
  
  
    for(todo of todos){
        const newTodo = makeTodo(todo.task, todo.timestamp, todo.isCompleted);
        newTodo[TODO_ITEMID] = todo.id;
  
  
        if(todo.isCompleted){
            listCompleted.append(newTodo);
        } else {
            listUncompleted.append(newTodo);
        }
    }
 }