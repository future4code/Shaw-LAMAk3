import { Band, GetBandInterface } from "../model/Band";
import { BaseDataBase } from "./BaseDataBase";

export default class BandData extends BaseDataBase {
    protected TABLE_NAME = "NOME_TABELA_BANDAS";

    insert = async (band: Band) => {
        try {
          await this.connection(this.TABLE_NAME).insert(band);
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error("Erro ao criar a banda");
          }
        }
      };
    
    select = async (id: string): Promise<Band> => {
      try {
        const result = await this.connection(this.TABLE_NAME)
        .select("*")
        .where({id})

        return new Band(result[0].id, result[0].name, result[0].music_genre, result[0].responsible)
        
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("Erro ao retornar a banda");
        }
      }
      }
    }
    

