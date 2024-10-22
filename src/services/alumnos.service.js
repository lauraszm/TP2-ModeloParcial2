import Factory from '../models/Factory.js'

class AlumnosService{
    constructor(){
        this.model = Factory.get("FS")
    }

    addNuevaNotaAlumno = async(alumno) =>{
        const nuevaNota = await this.model.addNuevaNotaAlumno(alumno)
        return nuevaNota
    }

    getAllNotasAlumnos = async() =>{
        const allNotas = await this.model.getAllNotasAlumnos()
        return allNotas
    }

    getPromedio = async() => {
        const promedio = await this.model.getPromedio()
        return promedio
    }

    getAlumnoNotaMasBaja = async() => {
        const notaMasBaja = await this.model.getAlumnoNotaMasBaja()
        return notaMasBaja
    }

    getAlumnoNotaMasAlta = async() => {
        const notaMasAlta = await this.model.getAlumnoNotaMasAlta()
        return notaMasAlta
    }
}

export default AlumnosService