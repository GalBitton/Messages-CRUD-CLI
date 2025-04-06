const program = require('commander');
const { createMessage } = require('./commands/create');
const { deleteMessage } = require('./commands/delete');
const { getMessage } = require('./commands/get');
const { listMessages } = require('./commands/list');
const { updateMessage } = require('./commands/update');

program.program.version('1.0.0').description('Command-Line Interface for Messages-RestAPI CRUD operations');

program.program.command('list').description('List all messages').action(listMessages);
program.program.command('get <id>').description('Get a message by ID').action(getMessage);
program.program.command('create').description('Create a new message').action(createMessage);
program.program.command('update <id>').description('Update a message by ID').action(updateMessage);
program.program.command('delete <id>').description('Delete a message by ID').action(deleteMessage);

program.program.parse(process.argv);
