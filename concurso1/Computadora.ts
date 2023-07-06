import { IComputadora } from "./Interfaces";

export class Computadora implements IComputadora {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    }
}