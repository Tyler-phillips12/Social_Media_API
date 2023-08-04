## Social Network API
    This is a social network API Back End that allows users to interact with various routes to manage users, thoughts, reactions, and friend lists. The API is built using Node.js, Express.js, and Mongoose, and it communicates with a MongoDB database to store and retrieve data.

## Repo Link and Demo

https://github.com/Tyler-phillips12/Social_Media_API

https://drive.google.com/file/d/1lejs1QBPbp1ORl2Gj5h7DEa9Fih3S05Z/view


## Getting Started
    To use the social network API, follow the instructions below to set up and run the application on your local machine.

## Prerequisites
    Node.js and npm must be installed on your machine. You can download and install them from the official Node.js website: https://nodejs.org
## Installation
    Clone this repository to your local machine using the following command:

    git clone https://github.com/Tyler-phillips12/Social-Media-API.git
    Navigate to the project directory:

        cd Social-Media-API

    Install the required dependencies:

        npm install
## Usage
    To start the server and sync the Mongoose models to the MongoDB database, run the following command:

    npm start

    Once the server is running, you can use Insomnia (or any API testing tool of your choice) to interact with the API routes.
    
## API Routes

## Users
    GET /api/users: Retrieves a list of all users in a formatted JSON format.
    POST /api/users: Creates a new user in the database.
    PUT /api/users/:id: Updates an existing user's information based on the provided id.
    DELETE /api/users/:id: Deletes a user and all associated data from the database.
## Thoughts
    GET /api/thoughts: Retrieves a list of all thoughts in a formatted JSON format.
    GET /api/thoughts/:id: Retrieves a specific thought based on the provided id.
    POST /api/thoughts: Creates a new thought for a user in the database.
    PUT /api/thoughts/:id: Updates an existing thought's information based on the provided id.
    DELETE /api/thoughts/:id: Deletes a thought and all associated data from the database.
## Reactions
    POST /api/thoughts/:id/reactions: Adds a new reaction to a specific thought based on the provided id.
    DELETE /api/thoughts/:id/reactions/:reactionId: Deletes a reaction from a specific thought and updates the database accordingly.
    Friend Lists
    POST /api/users/:id/friends/:friendId: Adds a new friend to a user's friend list based on the provided id and friendId.
    DELETE /api/users/:id/friends/:friendId: Removes a friend from a user's friend list based on the provided id and friendId.
## Testing
    You can use Insomnia or any other API testing tool to test the various API routes mentioned above. Ensure that the server is running before testing the routes.

## Contributing
    If you wish to contribute to the development of this project, please follow the guidelines and open a pull request on the GitHub repository.

## License
    This project is licensed under the MIT License.

## Contact
    If you have any questions or need further assistance, feel free to contact the project maintainers or open an issue on the GitHub repository. Thank you for using our social network API!