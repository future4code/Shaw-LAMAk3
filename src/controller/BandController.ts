import { Request, Response } from "express";
import BandBusiness from "../business/BandBusiness";
import { addBandDTO } from "../types/addBandDTO";

export default class  BandController {

    constructor(private bandBusiness: BandBusiness) {}

    addBand = async (req: Request, res: Response) =>{
        const token = req.headers.authorization as string
        const {name, music_genre, responsible} = req.body
        const input: addBandDTO = {
            name,
            music_genre,
            responsible
          }
        try {
        await this.bandBusiness.addBand(input, token);
        res.status(201).send({ message: "Banda criada com sucesso", token });
        } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send(error.message);
        }
        res.status(500).send("Erro ao criar a banda");
        }
    }

    getBand = async (req: Request, res: Response) =>{
        const token = req.headers.authorization as string
        const {id} = req.params

        try {
            const result = await this.bandBusiness.getBand(id, token);
            res.status(201).send({ result });
            } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            }
            res.status(500).send("Não encontramos essa banda");
            }

    }


}