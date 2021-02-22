import express from 'express';
export abstract class RoutesConfig {
    app: express.Application;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.configureRoutes();
    }
    abstract configureRoutes(): express.Application;
}