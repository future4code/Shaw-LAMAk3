import { Band } from "../model/Band";
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

}