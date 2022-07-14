import { Request, Response } from "express"
import ShowBusiness from "../business/ShowBusiness";
import { createShowDTO } from "../types/createShowDTO";

export default class ShowController {
constructor(
    private showBusiness:ShowBusiness
){}
    addShow = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string;
        const {week_day,start_time,end_time,band_id} = req.body
    
        
        const input:createShowDTO = {
            week_day,
            start_time,
            end_time,
            band_id
        }

        try {
            const newShow = await this.showBusiness.createNewShow(input, token)

            res.status(201).send({ message: "Show agendado com sucesso!", newShow});

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
              }
              res.status(500).send("Erro ao tentar agendar show!");
            }
        }
    };



