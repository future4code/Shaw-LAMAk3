export enum WEEK_DAYS {
    SEXTA = "sexta",
    SABADO = "sabado",
    DOMINGO = "domingo"
}

export interface GetShows {
    id: string
    week_day: WEEK_DAYS
    start_time: number
    end_time: number
    band_id: string
}

export interface BandsOnDay {
    name: string
    music_genre: string
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