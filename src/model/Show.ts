export enum WEEK_DAYS {
SEXTA ="sexta",
SABADO ="sabado",
DOMINGO = "domingo"
}


export class Show {
    constructor(
        private id: string,
        private week_day: WEEK_DAYS,
        private start_time: number,
        private end_time: number,
        private band_id: string,
    ) { }
}