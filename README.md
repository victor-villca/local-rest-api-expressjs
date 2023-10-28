# NodeJS-Express-SimpleCRUD-API

This project is an implementation of a REST API for performing CRUD (Create, Read, Update, Delete) operations using Node.js and Express.js. The primary operations of this API include:

1. **Get Users:** Retrieve a list of all users.
2. **Get Specific User:** Fetch information about a specific user.
3. **Create a New User:** Add a new user to the database.
4. **Delete a User:** Remove a user from the database.
5. **Update User Information:** Modify the information of an existing user.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

   ```
   git clone https://github.com/victor-villca/NodeJS-Express-SimpleCRUD-API.git
   ```

2. Install the required dependencies.

   ```
   npm install
   ```

3. Start the server.

   ```
   npm start
   ```

Your API should now be up and running, allowing you to perform CRUD operations on user data.

## Usage

You can use various HTTP requests to interact with the API:

- `GET /users`: Retrieve a list of all users.
- `GET /users/{id}`: Fetch information about a specific user by providing their ID.
- `POST /users`: Create a new user by sending a JSON payload with user details.
- `DELETE /users/{id}`: Delete a user by providing their ID.
- `PUT /users/{id}`: Update user information by providing their ID and the updated data.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit pull requests with your changes. :)
