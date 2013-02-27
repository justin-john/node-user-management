Getting Started With Node User Management
=========================================

## Prerequisites

1. Install node to your server.
2. Install Mongo Driver in server.

**Note:**
Please create a database called **test** in MongoDB.

## Installation

Step 1. Clone the repository.

Step 2. Go to root of your cloned directory and use below command in terminal
    
    npm install

Step 3. Enter below command. Use this command after any change is made in files.

    node app.js


Step 4. Go to url **http://localhost:3000**.


## Working principle of node user management application

When visting an url like **http://localhost:3000**, the control first passes to __app.js__.

    app.get('/', user.index);

The above line snippet will redirect control to __routes/users.js__. 
The function __exports.index()__ will called in __users.js__.

This is the basic work flow of node application. 


