
import express from 'express';
import { RoutesConfig } from '../routes/routes.config';
import CsvController from './csv.controller';
import multer from 'multer';
var upload = multer({dest: "uploads/"});

export class CsvRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Csv Routes');
    }
    configureRoutes() {
        this.app.route(`/csv`).post(upload.single('csvFile'), CsvController.csvParse);
        return this.app;
    }
}