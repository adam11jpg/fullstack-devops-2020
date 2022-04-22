import {convert} from '../service/Service';
import {Express} from 'express';

 interface TtfRgb {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
}

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color : TtfRgb = JSON.parse(req.query.color as string);
            const convertedColor: any = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;


