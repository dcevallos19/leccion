import { ILaboratorio, IComputadora } from "./Interfaces";

export class Laboratorio implements ILaboratorio {
    public nombre: string;
    protected categoria: string;
    protected computadora: IComputadora[];
    protected softwarelista: string[];

    constructor(nombre: string, categoria: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.computadora = [];
        //Software instalado en el laboratorio
        this.softwarelista = ["Eclipse IDE", "Microsoft Office Suite", "Adobe"];
    }

    public AgregarComputadora(computadora: IComputadora): void {
        this.computadora.push(computadora);
    }

    public getSoftwarelista(): string[] {
        return this.softwarelista;
    }
}