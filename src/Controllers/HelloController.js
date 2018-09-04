//@flow
import type {$Request, $Response} from 'express'
class HelloController{
    sayHello = (req: $Request , res:$Response) => {
        res.send('hello');
    }
}

export default HelloController;