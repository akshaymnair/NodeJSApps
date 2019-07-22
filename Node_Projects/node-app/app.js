const notes = require('./note.js');
const chalk = require('chalk');
const yargs = require('yargs');

const read = function () {
    console.log('Reading data...')
}
//customize yargs version
yargs.version('1.1.0');

//create commands with Yargs
yargs.command({
    command: 'add',
    // descriptin of the funciton
    describe: 'Adds new note!',
    // builder takes the auguments
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    // function that has to be called
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'read data',
    handler: read
})

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the data...')
    }
})

yargs.parse()
// console.log(yargs.argv);

