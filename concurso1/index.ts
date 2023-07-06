import { Laboratorio } from "./Laboratorio";
import { ListaLaboratorio } from "./ListaLaboratorio";
import { Estudiante } from "./Estudiante";
import { Computadora } from "./Computadora";

const listaLaboratorio = ListaLaboratorio.getInstance();

const Laboratorio1 = new Laboratorio('Laboratorio Nº1', 'Contabilidad');
const Laboratorio2 = new Laboratorio('Laboratorio Nº2', 'Logica de Programacion');
const Laboratorio3 = new Laboratorio('Laboratorio Nº3', 'Speedrun Photoshop');

const Computadora1 = new Computadora('Computadora A3');
const Computadora2 = new Computadora('Computadora C2');
const Computadora3 = new Computadora('Computadora J3');

Laboratorio1.AgregarComputadora(Computadora1);
Laboratorio2.AgregarComputadora(Computadora2);
Laboratorio3.AgregarComputadora(Computadora3);

const Estudiante1 = new Estudiante('Hernan', 'Contabilidad', Laboratorio1);
Estudiante1.AgregarComputadora(Computadora1);
Estudiante1.AgregarSoftware('Microsoft Office');

const Estudiante2 = new Estudiante('Alejandro', 'Logica de Programacion', Laboratorio2);
Estudiante2.AgregarComputadora(Computadora2);
Estudiante2.AgregarSoftware('Visual Studio');

const Estudiante3 = new Estudiante('Fabricio', 'Speedrun Photoshop', Laboratorio3);
Estudiante3.AgregarComputadora(Computadora3);
Estudiante3.AgregarSoftware('Adobe Creative Cloud');

listaLaboratorio.AgregarParticipante(Estudiante1);
listaLaboratorio.AgregarParticipante(Estudiante2);
listaLaboratorio.AgregarParticipante(Estudiante3);

const participantes = listaLaboratorio.getParticipantes();
for (const participante of participantes) {
    console.log(participante.getObtenerDetalle());
}