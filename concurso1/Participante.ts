import { IParticipante } from "./Interfaces";

export class Participante implements IParticipante {
    protected nombre: string;
    protected modalidad: string;

    constructor(nombre: string, modalidad: string) {
        this.nombre = nombre;
        this.modalidad = modalidad;
    }

    public getObtenerDetalle(): string {
        return `Participante: ${this.nombre}\nModalidad asignada a concursar: ${this.modalidad}`;
    }
}