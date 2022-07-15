import { BandsOnDay, GetShows, Show, WEEK_DAYS } from "../model/Show";
import { BaseDataBase } from "./BaseDataBase";



export default class ShowData extends BaseDataBase {

    protected TABLE_NAME = "NOME_TABELA_SHOWS"
    protected TABLE_NAME2 = "NOME_TABELA_BANDAS"

    insertNewShow = async (show: Show) => {
        try {
            await this.connection(this.TABLE_NAME).insert(show)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao criar o Show!");
            }
        }
    };

    getByDate = async (week_day: WEEK_DAYS): Promise<BandsOnDay[]> => {
        try {

            const result = await this.connection(this.TABLE_NAME)
                .select("NOME_TABELA_BANDAS.name", "NOME_TABELA_BANDAS.music_genre")
                .from(this.TABLE_NAME)
                .where({ week_day: week_day })
                .orderBy("start_time")
                .join(this.TABLE_NAME2, "NOME_TABELA_SHOWS.band_id", "NOME_TABELA_BANDAS.id")

            return result


        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao buscar show pela data!");
            }
        }
    };


    getShows = async (): Promise<GetShows[]> => {
        try {
            const result: GetShows[] = await this.connection(this.TABLE_NAME)
                .select("*")

            return result

        } catch (error: any) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao buscar show pela data!");
            }
        }
    }








} 