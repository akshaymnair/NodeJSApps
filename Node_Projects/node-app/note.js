const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return ('Your notes...')
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (n) {
        return n.title === title;
    })
    console.log(JSON.stringify(duplicateNotes) + " duplicate Notes >> ")

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes);
        saveNotes(notes);
        console.log(chalk.green.bold.inverse("new note added"));
    }
    else {
        console.log(chalk.red.bold.inverse("Note title already taken"));
    }

}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (err) {
        return []
    }
}

const saveNotes = function (notes) {
    const noteJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteJson)

}

const removeNote = function (title) {
    console.log("deleting note with title : " + title);
    const notes = loadNotes();
    const newNotes = notes.filter(function (n) {
        return n.title !== title;
    })
    if (notes.length === newNotes.length) {

        console.log(chalk.red.bold.inverse("No note found!"));
        saveNotes(newNotes);

    }
    else {
        console.log(chalk.green.bold.inverse("Note removed!"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
