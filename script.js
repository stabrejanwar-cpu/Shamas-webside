function showMessage() {
    alert("Welcome to Sams CodeHub 🚀");
}

function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    if (fileInput.files.length === 0) {
        alert("Please select a file!");
        return;
    }

    const fileName = fileInput.files[0].name;

    const li = document.createElement("li");
    li.textContent = fileName;

    fileList.appendChild(li);

    alert("File uploaded successfully!");
}
