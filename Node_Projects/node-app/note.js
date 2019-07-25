const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return ('Your notes...')
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // using a filter funciton to check if a title is already in the file is not efficient
    // instead use a find function
    // const duplicateNotes = notes.filter((n) => n.title === title);

    const duplicateNote = notes.find((n) => n.title === title);
    // console.log(JSON.stringify(duplicateNotes) + " duplicate Notes >> ")


    //debugg from here
    debugger

    // if (duplicateNotes.length === 0) {
        if (!duplicateNote){
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
// const loadNotes = function () {
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (err) {
        return []
    }
}

const saveNotes = (notes) => {
    const noteJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteJson)

}

const removeNote = (title) => {
    console.log("deleting note with title : " + title);
    const notes = loadNotes();
    // const newNotes = notes.filter(function (n) {
    //     return n.title !== title;
    // })
    const newNotes = notes.filter((n) => n.title !== title)
    if (notes.length === newNotes.length) {

        console.log(chalk.red.bold.inverse("No note found!"));

    }
    else {
        console.log(chalk.green.bold.inverse("Note removed!"));
        saveNotes(newNotes);
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold.inverse("------------Your Notes------------"));
    var i = 1;
    notes.forEach(note => {
        console.log(i + ". " + note.title);
        i++;
    });
}

const readNote = (title) =>{
    const notes = loadNotes();
    const findNote = notes.find((n) => n.title===title);
    if (!findNote){
        console.log(chalk.bold.red.inverse('No note found in the given title name'));
    } 
    else{
        console.log(chalk.bold.yellow.inverse(findNote.title));
        console.log(findNote.body);
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
