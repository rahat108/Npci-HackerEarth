

## Npci app with Spring Boot, React and MySQL

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

1. First go to the `client` folder -

```bash
cd client
```

2, Then type the following command to install the dependencies and start the application -

```bash
npm install
npm start
```

The front-end server will start on port `3000`.

	The client will start on port `3000`. You'll be able to access the complete application on `http://localhost:3000`.

