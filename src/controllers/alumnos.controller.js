import AlumnosService from '../services/alumnos.service.js'

class AlumnosController{
    constructor(){
        this.service = new AlumnosService()
    }

    addNuevaNotaAlumno = async(req,res) => {
        const alumno = req.body
        if(JSON.stringify(alumno) === "{}"){
            res.status(400).send("Debe incluir un alumno en el cuerpo de la solicitud")
        } else {
            const newAlumno = await this.service.addNuevaNotaAlumno(alumno)
            res.status(200).send(newAlumno)
        }
    }

    getAllNotasAlumnos = async(req,res) => {
        const allAlumnos = await this.service.getAllNotasAlumnos()
        res.status(200).send(allAlumnos)
    }

    getPromedio = async(req,res) => {
        const promedio = await this.service.getPromedio()
        res.status(200).send(promedio)
    }

    getAlumnoNotaMasBaja = async(req,res) => {
        const alumNotaMasBaja = await this.service.getAlumnoNotaMasBaja()
        res.status(200).send(alumNotaMasBaja)
    }

    getAlumnoNotaMasAlta = async(req,res) => {
        const alumNotaMasAlta = await this.service.getAlumnoNotaMasAlta()
        res.status(200).send(alumNotaMasAlta)
    }
}

export default AlumnosController