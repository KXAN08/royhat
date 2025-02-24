let notes = [];

function addNote() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    
    if (title && description) {
        notes.push({ title, description });
        displayNotes();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }
}

function displayNotes() {
    let noteList = document.getElementById("noteList");
    noteList.innerHTML = "";
    
    notes.forEach((note, index) => {
        let noteItem = document.createElement("div");
        noteItem.className = "p-4 border-b";
        noteItem.innerHTML = `<strong>${note.title}</strong> <p>${note.description}</p> <button onclick="deleteNote(${index})" class="text-red-500">O'chirish</button>`;
        noteList.appendChild(noteItem);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}
