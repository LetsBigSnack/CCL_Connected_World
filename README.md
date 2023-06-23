![logo.png](logo.png)
# What is BattleChamp

BattleChamp is a Project, which was created in 2 weeks during the Creative Code Labs for the UAS St. Pölten. 

The Original Idea of BattleChamp:

>  Quick edit
Description
BattleChamp is a simple 2D arena brawler you can play in your browser. It is thrilling and engaging*. You can participate in exciting multiplayer battles, taking control of one of many characters to battle the enemy. You can choose/purchase multiple characters in the in-game store, each with their own different stats and skills, letting you tailor your gameplay experience to your liking.
[* may not be true]

> BattleChamp offers vast Community and Social features. You can make/add friends, monitor their progress, and even compete against them in fights. A global leaderboard lets you compare your performance to other players and see where you stand.

This was later reduced to completed it in a two-week time frame.

# Used Technology

The following Technology was used to create this project.
- [NodeJs](https://nodejs.org/en)
  - [Express](https://expressjs.com)
- [Vite](https://vitejs.dev)
- [Vue](https://vuejs.org)
  - [Tailwindcss](https://tailwindcss.com)
  - [Flowbite](https://flowbite.com)
- [MySQL](https://www.mysql.com/de/)

# Deployment

The following section will show you how to deploy the website, and it's associated backend. All routes start from the root directory in which the README.md is in.

## Deploying the Database

### Prerequisites
Before proceeding with the deployment, make sure you have the following:
- MySQL server installed and running.
- Access privileges to create databases and tables.

Deploy the MySQL database using any tool you like (CLI, PHPMyAdmin, etc.). Use the provided [ccl_sql-schema.sql](resources/ccl_sql-schema.sql) file. You can now proceed with configuring and integrating the database into your application or system.

## Deployment Server

### Prerequisites
Before proceeding with the deployment, make sure you have the following:

- Node.js and npm (Node Package Manager) installed. [node version 18.15.0 was used]
- MySQL server running with the database properly set up.

Navigate to the CCL server directory on your local machine using the command prompt or terminal:

```bash
cd ./ccl-server/
```

Create a .env file in the root of the CCL server directory. This file will contain the required configurations for the API. You can use a text editor to create and edit this file.
Example .env file:

```makefile
DB_HOST=your_db_host
DB_USER=your_password
DB_PASSWORD=your_password
DB_Database=your_database
DB_PORT=3306
```

Replace the values for **DB_HOST**, **DB_USER**, **DB_PASSWORD**, and **DB_Database** with your MySQL server details. Modify the **DB_PORT** value if necessary.

Start the development server by running the following command:

```bash
npm run dev
```

Wait for the server to start. You should see a message indicating that the server is running
```
[nodemon] starting `node app.js`
SERVER STARTED
DATABASE CONNECTED
```

## Deployment Website

### Prerequisites
Before proceeding with the deployment, make sure you have the following:

- Node.js and npm (Node Package Manager) installed. [node version 18.15.0 was used]
- MySQL server running with the database properly set up.

Navigate to the CCL client directory on your local machine using the command prompt or terminal:

```bash
cd ./ccl-client/
```

Create a .env file in the root of the CCL client directory. This file will contain the required configurations for the frontend. You can use a text editor to create and edit this file.

Example .env file:

```makefile
VITE_API_BASE_URL=https://cc221019-10110.node.fhstp.io
```
Replace https://cc221019-10110.node.fhstp.io with the appropriate base URL of your deployed backend REST API.

Start the client by running the following command:

```bash
npm run dev
```

#### Possible Problems [Hosting on node.fhstp.io]

Configure Websockets Tutorial:
https://www.youtube.com/watch?v=bf52ITTT-g0

# Documentation / Functionality

The Code has been documented to the jsdoc. The generated jsdocs has been exported to a HTML-File, which can be view unser `resources/documentation/out`
You just need to run the [index.html](/resources/documentation/out/index.html)

The API has been documented here [API-Documentation](resources/documentation/API-Documentation.md)


# Contact Information

If you have any further question / need help contact me on cc221019@fhstp.ac.at
