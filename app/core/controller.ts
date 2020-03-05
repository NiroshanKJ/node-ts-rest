import { Response } from 'express';
import Output from './output';

class Controller {
    render(viewFile: string, response: Response, data:any) {
        Output.render(viewFile, response, data);
    }

    json( data:any, response: Response) {
        Output.json(response, data);
    }
}

export default Controller;