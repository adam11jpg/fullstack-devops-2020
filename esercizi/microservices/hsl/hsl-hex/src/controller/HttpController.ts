import {convert} from '../service/Service';
import {Express} from 'express';
export interface TtfHsl {
    readonly hue: number;
    readonly saturation: number;
    readonly lightness: number;
}

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color : TtfHsl = JSON.parse(req.query.color as string);
            const convertedColor: any = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
