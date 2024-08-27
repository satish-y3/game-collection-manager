# Game Collection Manager

## Description
Game Collection Manager is a basic CRUD (Create, Read, Update, Delete) web application built using Node.js, Express.js, MongoDB, and EJS. The application allows users to manage their game collections by adding, viewing, editing, and deleting game entries. The user interface is responsive, utilizing Bootstrap for styling, and is designed to be intuitive and easy to use.

## Features
- **Create**: Add new games to your collection with details such as title, genre, platform, and status.
- **Read**: View a list of all games in your collection with details displayed in an organized manner.
- **Update**: Edit the details of existing games in your collection.
- **Delete**: Remove games from your collection that you no longer wish to track.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side code execution.
- **Express.js**: Web application framework for building the server and handling routes.
- **MongoDB**: NoSQL database for storing and managing game data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to define schemas and interact with the database.
- **EJS (Embedded JavaScript)**: Templating engine for dynamically rendering HTML pages.
- **Bootstrap**: CSS framework for responsive design and UI components.
- **JavaScript**: Programming language for server-side logic and interactions.
- **HTML**: Markup language for structuring web pages.
- **CSS**: Stylesheet language for designing the appearance of the web pages.
- **Morgan**: Middleware for logging HTTP requests and errors during development.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your system:

1. **Node.js**:
   - Visit the [Node.js official website](https://nodejs.org/) and download the latest LTS version.
   - Follow the installation instructions for your operating system.
   - Verify the installation by opening a command prompt or terminal and typing:
     node -v
   - This should return the installed version number.

2. **MongoDB**:
   - Visit the [MongoDB official website](https://www.mongodb.com/try/download/community) to download and install MongoDB Community Edition.
   - Follow the installation instructions for your operating system.
   - After installation, start the MongoDB service. On most systems, you can do this by running:
     mongod
   - You can also set up MongoDB as a service so that it starts automatically with your system.

### Installation

Once Node.js and MongoDB are installed, follow these steps to set up and run the Game Collection Manager:

1. **Clone the repository**:
   - Open your command prompt or terminal and navigate to the directory where you want to clone the project.
   - Run the following command to clone the repository:
     git clone https://github.com/satish-y3/game-collection-manager.git
  
   - Navigate into the project directory:
     cd game-collection-manager
    

2. **Install project dependencies**:
   - In the project directory, install the necessary dependencies by running:
     npm install

   - This will install all the packages listed in the `package.json` file, including Express, Mongoose, EJS, Bootstrap, and Morgan.

3. **Ensure MongoDB is running**:
   - If MongoDB is not already running, start it by executing:
     mongod
   - If you are using MongoDB Atlas (cloud-based), make sure to update the MongoDB connection string in your `app.js` file.

### Running the Application

1. **Start the application**:
   - In the project directory, start the server by running:
     node app.js
   - This will start the Node.js server and the application will be available locally.

2. **Access the application**:
   - Open your web browser and navigate to `http://localhost:3000`.
   - You should see the homepage of the Game Collection Manager application.

### Usage

- **Add a Game**: Use the form on the main page to add new games to your collection by providing the title, genre, platform, and status.
- **View Games**: The main page lists all games currently stored in the database.
- **Edit a Game**: Click the "Edit" button next to a game to update its details.
- **Delete a Game**: Click the "Delete" button next to a game to remove it from your collection