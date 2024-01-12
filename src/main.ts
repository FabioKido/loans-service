import express, {Request, Response} from "express";
import GetLoansAvailable from "./application/UseCase/GetLoansAvailable";

const app = express();

app.use(express.json());

app.post('/customer-loans', function(req: Request, res: Response) {
    const getLoansAvailable = new GetLoansAvailable()
    const result = getLoansAvailable.execute(req.body) 

    res.status(200).json(result)
})

app.listen(3000, () => {
    console.log('Server started: http://localhost:3000')
});