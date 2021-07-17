document.addEventListener("DOMContentLoaded", function() {
    
    const submitForm = document.getElementById("inputbBook");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
    });

    if(isStorageExist()) {
        loadDataFromStorage();
    }

    document.addEventListener("ondatasaved", () => {
        console.log("Data Berhasil disimpan");
    })
    document.addEventListener("ondataloaded", () => {
        refreshDataFromFromLibrary();
    })

})