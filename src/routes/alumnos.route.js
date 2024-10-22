import AlumnosController from "../controllers/alumnos.controller.js";
import express from 'express'

class AlumnosRouter{
    constructor(){
        this.controller = new AlumnosController()
        this.router = new express.Router()
    }

    start(){
        this.router.post("/newAlumno", this.controller.addNuevaNotaAlumno)
        this.router.get("/allAlumnos", this.controller.getAllNotasAlumnos)
        this.router.get("/alumnos/promedio", this.controller.getPromedio)
        this.router.get("/alumnos/notaMasBaja", this.controller.getAlumnoNotaMasBaja)
        this.router.get("/alumnos/notaMasAlta", this.controller.getAlumnoNotaMasAlta)
        return this.router
    }
}

export default AlumnosRouter