import express from "express";
import http, { Server } from "http";
import https from "https";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const allowList = ['http://localhost:4200'];

app.use(cors({
    credentials: true,
    origin: allowList
}));

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