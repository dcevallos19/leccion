//Esta seran nuestras interfaces que implementaremos en las respectivas clases
//En la interface IParticipante se aplica el polimorfismo ya que el metodo getObtenerDetalle
//Se implementa en las clases Paricipantes y esta a su vez tambien se implementa en la clase Estudiante
//Ya que la clase Participante esta heredando a la subclase que es Estudiante
export interface IParticipante {
    getObtenerDetalle(): string;
}

export interface ILaboratorio {
    nombre: string;
    getSoftwarelista(): string[];
}

export interface IComputadora {
    nombre: string;
}