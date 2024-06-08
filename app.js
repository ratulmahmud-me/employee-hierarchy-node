import "dotenv/config";
import express from "express";
import http from "http";
import https from "https";
import fs from "fs";
import cors from "cors";
import { handleRequest } from "./src/middlewares/handleRequest";
import router from "./src/routes";
import { handleError } from "./src/middlewares/handleError";
import { errorLogger } from "./src/middlewares/handleLogger";

const app = express();

app.use(express.json());

// set cors properties 
const allowList = ['http://localhost:4200'];

app.use(cors({
    credentials: true,
    origin: allowList
}));

// set the request handler middleware 
app.use(handleRequest);

// set the router 
app.use(router);

// error logger middleware 
app.use(errorLogger)

// error handler middleware 
app.use(handleError);

// server configuration 
const startServer = async (mode = process.env.ENVIRONMENT) => {
    let SSLDIR, PORT, HOST, server, protocol;
    switch (mode) {
        case 'dev':
            SSLDIR = './SSL/dev';
            PORT = process.env.PORT_DEV;
            HOST = process.env.HOST_DEV;
            protocol = 'https';
            break;
        case 'prod':
            SSLDIR = './SSL/prod';
            PORT = process.env.PORT_PROD;
            HOST = process.env.HOST_PROD;
            protocol = 'https';
            break;
        default:
            PORT = process.env.PORT_LOCAL;
            HOST = process.env.HOST_LOCAL;
            protocol = 'http';
            break;
    }
    if (mode === 'local') {
        server = http.createServer(app);
    }
    else {
        server = https.createServer(
            // uncomment if wish to add ssl sertificates and certificates in SSL dir.
            // {
            //     key: fs.readFileSync(`${SSLDIR}/server.key`),
            //     cert: fs.readFileSync(`${SSLDIR}/server.crt`),
            // },
            app
        );
    }

    server.listen(PORT, () => {
        console.log(`Server is listening at ${protocol}://${HOST}:${PORT}/api ⚡⚡`);
    })
}

startServer();

export default app;