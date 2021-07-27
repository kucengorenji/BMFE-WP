document.addEventListener("DOMContentLoaded", function() {
    
    const submit = document.getElementById("inputBook");

    submit.addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm(event);
    })

    if(isStorageExist()) {
        loadDataFromStorage();
    }

    document.addEventListener("ondatasaved", () => {
        console.log("Data Berhasil disimpan");
    });
    document.addEventListener("ondataloaded", () => {
        refreshDataFromFromLibrary();
    });
})
