import express from 'express';
import  * as fs from 'fs';
import csv  from 'csv-parser';
class CsvController {
    private static instance: CsvController;

    static getInstance(): CsvController {
        if (!CsvController.instance) {
            CsvController.instance = new CsvController();
        }
        return CsvController.instance;
    }
    async csvParse(req: any, res: express.Response) {
        let results : any = [];
        fs.createReadStream( 'uploads'+'/'+ req.file.filename)
            .pipe(csv())
            .on('data', (data : any) => results.push(data))
            .on('end', () => {
                console.log(results);
                let obj:  any= {};
                obj['size'] = req.file.size;
                obj['rows'] = results.length + 1;
                obj['columns'] = Object.keys(results[0])
                res.status(200).json(obj);

            });

    }


}

export default CsvController.getInstance();