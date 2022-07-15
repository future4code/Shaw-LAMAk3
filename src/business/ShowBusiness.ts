import { weekdays } from "moment";
import ShowData from "../data/ShowData";
import { Show, WEEK_DAYS } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { createShowDTO } from "../types/createShowDTO";

export default class ShowBusiness {
    constructor(
        private showData: ShowData,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) { }

    createNewShow = async (input: createShowDTO, token: string) => {

        const { week_day, start_time, end_time, band_id } = input

        /*  if (!week_day || !start_time || !end_time) {
             throw new Error("Todos os dados devem ser preechidos!")
         } */
        const tokenData = this.authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token nao enviado ou token inválido")
        }

        const id = this.idGenerator.generate();

        const show: Show = new Show(
            id,
            week_day,
            start_time,
            end_time,
            band_id
        );
        if (start_time < 8 && end_time > 23) {
            throw new Error("Horario não permitido para show!")
        }
        /*      if (week_day && start_time && end_time) {
                 throw new Error("Ja existe show agendado para data/horario marcado!")
             } */
        await this.showData.insertNewShow(show)
    };

    showByDate = async (input: WEEK_DAYS, token: string) => {
        const tokenData = this.authenticator.getTokenData(token)
        if(!tokenData){
            throw new Error("Token nao enviado ou token inválido")
        }

        const shows = await this.showData.getByDate(input)

        return shows
    }


}