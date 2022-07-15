import { weekdays } from "moment";
import { Show, WEEK_DAYS } from "../model/Show";
import { BaseDataBase } from "./BaseDataBase";



export default class ShowData extends BaseDataBase {

    protected TABLE_NAME = "NOME_TABELA_SHOWS"

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

    getByDate = async (week_day: WEEK_DAYS): Promise<Show[]> => {
        try {

            const result = await this.connection(this.TABLE_NAME)
                .select("*")
                .where({week_day})
                .orderBy("start_time").limit(10)


            const resultShow = result.map((show: Show) => {
                return new Show(
                    show.id,
                    show.week_day,
                    show.start_time,
                    show.end_time,
                    show.band_id
                                );
            });

            return resultShow

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao buscar show pela data!");
            }
        }
    };








} 