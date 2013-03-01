Getting Started With Node User Management
=========================================

## Prerequisites

1. Install node to your server.
2. Install Mongo Driver in server.

**Note:**
Please create a database called `test` in MongoDB. Also check mongo connection present in `routes/users.js` with your crendentials for
connection.

## Installation

Step 1. Clone the repository.

Step 2. Go to root of your cloned directory and use below command in terminal
    
    npm install

Step 3. Enter below command. Use this command after any change is made in files.

    node app


Step 4. Go to url `http://localhost:3000`.


## Working principle of node user management application

When visting an url like `http://localhost:3000`, the control first passes to `app.js`.

    app.get('/', user.index);

The above line snippet will redirect control to `routes/users.js`. 
The function `exports.index()` will called in `users.js`.

This is the basic work flow of node application. 

## Additional Notes

The node user management uses dependency `stylus` for CSS. The styles can be changed in `public/stylesheets/style.styl` file. It uses `ejs` for view engine, you can `jade` instead of `ejs`. 