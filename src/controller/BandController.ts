import { Request, Response } from "express";
import { addBandDTO } from "../types/addBandDTO";

export default class  BandController {

    addBand = async (req: Request, res: Response) =>{
        const token = req.headers.authorization as string
        const {id, name, music_genre, responsible} = req.body
        const input: addBandDTO = {
            name,
            music_genre,
            responsible
          }
        try {
        const token = await this.bandBusiness.signup(input);
        res.status(201).send({ message: "Usuário criado com sucesso", token });
        } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send(error.message);
        }
        res.status(500).send("Erro no signup");
        }
    }


}