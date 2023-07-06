import { IParticipante } from "./Interfaces";

export class ListaLaboratorio {
    protected static instance: ListaLaboratorio;
    protected participante: IParticipante[];

    constructor() {
        this.participante = [];
    }

    public static getInstance(): ListaLaboratorio {
        if (!ListaLaboratorio.instance) {
            ListaLaboratorio.instance = new ListaLaboratorio();
        }
        return ListaLaboratorio.instance;
    }

    public AgregarParticipante(participante: IParticipante): void {
        this.participante.push(participante);
    }

    public getParticipantes(): IParticipante[] {
        return this.participante;
    }
}