# Employee API

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. Set up PostgreSQL and create a database.
4. Set the database URL in the .env file:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
    ```
5. Run migrations:
    ```
    npx prisma migrate dev --name init
    ```
6. Start the server:
    ```
    npm start
    ```

## Usage
* Get employee hierarchy: 
```
GET /api/employee/hierarchy?id=1
```
* Protected endpoint with JWT: 
    - Use Authentication header to send bearer token.
    - Set the SECRET_TOKEN in the .env file.
    ```
    SECRET_TOKEN='[Your Secret]'
    ```
```
GET /api/auth/protected
```

## Testing
Run unit test:
```
npm test
```

## Deployment
To deploy the application:

1. Ensure the environment variables are set in the production environment.
    * Set the ENVIRONMENT veriable to 'prod' in the .env file.
    * You can enable the SSL certificates as a perameter for https server in app.js file. By default it is commented in app.js file.
    ```
    server = https.createServer(
            // uncomment if wish to add ssl sertificates and certificates in SSL dir.
            // {
            //     key: fs.readFileSync(`${SSLDIR}/server.key`),
            //     cert: fs.readFileSync(`${SSLDIR}/server.crt`),
            // },
            app
        );
    ```
2. Use a process manager like PM2 to manage the Node.js application:
    ```
    pm2 start app.js --name [app_name]
    ```
3. Set up a reverse proxy using Nginx or Apache to handle requests

## Answers to Assessment Questions
1. If you do not complete the test please indicate how you would intend to finalize it:

    * The API and core functionalities are implemented. To finalize, I would ensure thorough testing, implement additional error handling, and optimize performance further.
2. Approach to problem:

    * Followed a modular approach, separating concerns into routes, controllers, and middleware.
    * Used Prisma for database interactions and can be implemented JWT for secure endpoints.
3. Logging & Monitoring at scale:

    * Implemented structured logging using library winston and winston-daily-rotate-file.
4. Deployment process and best practices:
    * Already discussed in the **Diployment** section above.
    * Other options:
        - Use CI/CD pipelines for automated testing and deployment.
        - Containerize the application using Docker for consistent deployment environments.