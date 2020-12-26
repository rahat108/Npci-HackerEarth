

Npci app component with Spring Boot, React and MySQL

## Steps to Setup the Spring Boot Back end app (server)


3. **Change MySQL username and password as per your MySQL installation**
	install MySQL Community Server

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

4. **Run the app**

	You can run the spring boot app with spring tool suite:

	import the login-app-server

	run as > spring boot app

	The server will start on port 5000. The spring boot app includes the front end build also, so you'll be able to access the complete application on `http://localhost:5000`.

5. **Add the default Roles**

	Any new user who signs up to the app is assigned the `ROLE_USER` by default.

## Steps to Setup the React Front end app (client)

First go to the `client` folder -

```bash
cd client
```

Then type the following command to install the dependencies and start the application -

```bash
npm install
npm start
```

The front-end server will start on port `3000`.

