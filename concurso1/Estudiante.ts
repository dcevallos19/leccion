import { ILaboratorio, IComputadora } from "./Interfaces";
import { Participante } from "./Participante";

export class Estudiante extends Participante {
    protected laboratorio: ILaboratorio;
    protected computadora: IComputadora;
    protected software: string[];

    constructor(nombre: string, modalidad: string, laboratorio: ILaboratorio) {
        super(nombre, modalidad);
        this.laboratorio = laboratorio;
        this.computadora = {} as IComputadora; // Valor inicial como objeto vacío
        this.software = [];
    }
    
    public AgregarComputadora(computadora: IComputadora): void {
        this.computadora = computadora;
    }

    public AgregarSoftware(software: string): void {
        this.software.push(software);
    }

    public getObtenerDetalle(): string {
        const InformacionParticipante = super.getObtenerDetalle();
        const InformacionLaboratorio = `Computadora Asignada: ${this.laboratorio.nombre}`;
        const InformacionComputadora = `Laboratorio Asignado: ${this.computadora.nombre}`;
        const SoftwareLaboratorio = `Software que incluye el laboratorio: ${this.laboratorio.getSoftwarelista().join(", ")}`;
        const SoftwareEstudiante = `Software que requiere el estudiante: ${this.software.join(", ")}`;

        return `${InformacionParticipante}\n${InformacionLaboratorio}\n${InformacionComputadora}\n${SoftwareLaboratorio}\n${SoftwareEstudiante}`;
    }
}

