import BandData from "../data/BandData";
import { Band, GetBandInterface } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { addBandDTO } from "../types/addBandDTO";

export default class BandBusiness {
    constructor(
        private bandData: BandData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
      ) {}

      addBand = async (input: addBandDTO, token: string) => {
        const { name, music_genre, responsible } = input;

        if (!name || !music_genre || !responsible) {
            throw new Error("Preencha todos os campos");
          }
      
          //fazer um id para o post
        const id = this.idGenerator.generate();

        //conferir se o token existe
        const tokenData = this.authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token não enviado ou expirado");
        }
        //criar o post no banco
        const band: Band = new Band(
            id,
            name,
            music_genre,
            responsible
        )
        await this.bandData.insert(band);

    //retornar o post
    return band;
  };

  getBand = async (id: string, token: string) => {
    const tokenData = this.authenticator.getTokenData(token)

    if (!tokenData) {
        throw new Error("Token não existe");
      }
    const result = await this.bandData.select(id)
    return result
};
}
