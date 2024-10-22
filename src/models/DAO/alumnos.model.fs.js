import fs from 'fs'

class AlumnosFSModel {
    constructor(){
        this.notasAlumnos = "alumnos.json"
    }
    
    addNuevaNotaAlumno = async(alumno) => {
        const allNotas = await fs.promises.readFile(this.notasAlumnos, "utf-8")
        const notasJson = JSON.parse(allNotas)
        if(notasJson.length === 0) {
            alumno.id = 1
        } else {
            alumno.id = notasJson[notasJson.length - 1].id+1
        }
        notasJson.push(alumno)
        const notasString = JSON.stringify(notasJson)
        await fs.promises.writeFile(this.notasAlumnos, notasString)
        return alumno
    }
    
    getAllNotasAlumnos = async() => {
        const allNotas = await fs.promises.readFile(this.notasAlumnos, "utf-8")
        const notasJson = JSON.parse(allNotas)
        if(notasJson.length > 0){
            return await notasJson
        } else {
            return "No hay alumnos ingresados"
        }
    }

    getPromedio = async() => {
        const allNotas = await fs.promises.readFile(this.notasAlumnos, "utf-8")
        const notasJson = JSON.parse(allNotas)
        let acum = 0;
        if(notasJson.length > 0){
            notasJson.forEach(nota => acum += nota.nota)
            const promedio = acum / notasJson.length
            return `El promedio de notas ingresadas hasta el momento es: ${promedio}`
        } else {
            return "No hay notas ingresadas"
        }

    }

    getAlumnoNotaMasBaja = async() => {
        const allNotas = await fs.promises.readFile(this.notasAlumnos, "utf-8")
        const notasJson = JSON.parse(allNotas)
        if(notasJson.length > 0){
            let sortArr = notasJson.sort((a,b) => parseInt(a.nota) - parseInt(b.nota))
            return `La nota más baja es ${sortArr[0].nota} del parcial de ${sortArr[0].nombre}`
        } else {
            return "No hay notas ingresadas"
        }
    }

    getAlumnoNotaMasAlta = async() => {
        const allNotas = await fs.promises.readFile(this.notasAlumnos, "utf-8")
        const notasJson = JSON.parse(allNotas)
        if(notasJson.length > 0){
            let sortArr = notasJson.sort((a,b) => parseInt(b.nota) - parseInt(a.nota))
            return `La nota más alta es ${sortArr[0].nota} del parcial de ${sortArr[0].nombre}`
        } else {
            return "No hay notas ingresadas"
        }
    }
}


export default AlumnosFSModel
