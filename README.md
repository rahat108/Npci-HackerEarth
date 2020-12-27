

## Npci super application with Spring Boot, React and MySQL

## Github Link - https://github.com/rahat108/Npci-hackerearth

## Google drive Link - https://drive.google.com/file/d/1yTcOOcVt6CZTBtVK4dKv_Rj5k1LuTPhd/view?usp=sharing

## Steps to Setup the Spring Boot Back end (server)


1. **Change MySQL username and password as per your MySQL installation**
	install MySQL Community Server

	+ open `server/src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

2. **Run the app**

	You can run the spring boot app with spring tool suite:

	import the server folder

	run as > spring boot app
	
	OR 
	
	Directly use Eclipse IDE and run the project as a spring boot application.
	

## Steps to Setup the React Front end (client)

**Install nodejs**

1. **First go to the `client` folder**

```bash
cd client
```

2. **Then type the following command to install the dependencies and start the application**

```bash
npm install
npm start
```

**The front-end server will start on port `3000` **

	The client will start on port `3000`. You'll be able to access the complete application on `http://localhost:3000`.



##Discription

**This project has been divided into 3 parts.**

1. **The Front end on Reactjs**

It uses axios and components along with fetching data from API to function.

It has a home page, login page, signup page,profile page,transaction page.

Bootstrap has also been used for basic designing.

Access tokens have been used appropriately.

Several utilities have also been defined which have been used accordingly.

2. **The back end on Spring boot.**

It consists of various packages such as: Config, Controller, Exception, Model, Model audit, payload, repository and security.
Spring security, Jpa, maven, hibernate and other various functionalities have been user accordingly.

Signin and Signup has also been added to enhance the authentication and authorization using JWT tokens.

Two roles have been added and they are ADMIN and USER, but by default user is added when account is created.

backend along with frontend works smoothly.

For security purposes JWT, password encoder, password decoder, storing of password into tables in hashform to maintain the integrity and also made sure that no API data except the Id is stored in the tables to maintain confidentiality.

3. **MYSQL**

Included in server folder.

It consists of 4 tables such as: users, transaction,roles and user_roles.

Users table mainly consists of user data such as username,email and other various information.

Transaction table consists of the transactions that have been done along with keep just the id from the API provided.

Roles and user_roles consists of user role and admin role information.

Primary key and foreign key contraints have been maintained.

I used VSCODE for frontend, eclipse IDE for backend and mysql workbench for database.

##Screenshots


![Backend (Spring boot) Eclipse IDE][1]

![Frontend (Reactjs) VS Code][2]

![Database (MYSQL) Workbench][3]

![Signup Page][4]

![Login Page][5]

![Transaction Page][6]

![Profile page][7]


## Github Link - https://github.com/rahat108/Npci-hackerearth


  [1]: https://he-s3.s3.amazonaws.com/media/uploads/01c9a06.png
  [2]: https://he-s3.s3.amazonaws.com/media/uploads/40234b8.png
  [3]: https://he-s3.s3.amazonaws.com/media/uploads/6a61648.png
  [4]: https://he-s3.s3.amazonaws.com/media/uploads/88b4747.png
  [5]: https://he-s3.s3.amazonaws.com/media/uploads/956f634.png
  [6]: https://he-s3.s3.amazonaws.com/media/uploads/a483bff.png
  [7]: https://he-s3.s3.amazonaws.com/media/uploads/b2421f5.png
