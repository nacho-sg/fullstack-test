# fullstack-test
An exercise to save items, and read them from a Database

We will want to create a UI where a user can save his name and age. This fields are going to be stored in a database
(mongoDB is preferred), in order to display in the UI all the saved names sorted by ages.

- The UI must submit the form clicking on a button
- The UI should not submit if the fields are empty
- The UI resets when we save the data successfully
- The backend should validate that the fields arent empty
- The backend persist the information, and returns 201 on creation
- The backend provides an endpoint to retrieve all saved items
