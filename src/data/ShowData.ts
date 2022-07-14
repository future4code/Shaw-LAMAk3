import { Show } from "../model/Show";
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








} 