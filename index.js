const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const yargs = require("yargs");

const argv = yargs

  .option("action", {
    describe: "Action to perform",
    demandOption: true,
    type: "string",
  })

  .option("id", {
    describe: "Contact id",
    type: "string",
  })

  .option("name", {
    describe: "Contact name",
    type: "string",
  })

  .option("email", {
    describe: "Contact email",
    type: "string",
  })

  .option("phone", {
    describe: "Contact phone number",
    type: "string",
  })
  .help().argv;

invokeAction({
  action: argv.action,
  id: argv.id,
  name: argv.name,
  email: argv.email,
  phone: argv.phone,
});

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((allContacts) => {
        console.log("All Contacts:", allContacts);
      });
      break;

    case "get":
      getContactById(id).then((contactById) => {
        console.log("Contact by Id:", contactById);
      });
      break;

    case "add":
      addContact(name, email, phone).then((newContact) => {
        console.log("Added Contact:", newContact);
      });
      break;

    case "remove":
      removeContact(id).then((removedContact) => {
        console.log("Removed Contact:", removedContact);
      });
      break;

    default:
      console.warn("Unknown action type!");
  }
}
