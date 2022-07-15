export enum WEEK_DAYS {
    SEXTA = "sexta",
    SABADO = "sabado",
    DOMINGO = "domingo"
}


export class Show {
    constructor(
        public id: string,
        public week_day: WEEK_DAYS,
        public start_time: number,
        public end_time: number,
        public band_id: string,
    ) { }

} 