class AlumnosMEMModel {
    constructor(){
        this.notasAlumnos = [
            {nombre: "Juana Gimenez" , nota: 10, curso: "21A"},
            {nombre: "Juana Pereira" , nota: 2, curso: "21A"},

        ]
    }
    
    addNuevaNotaAlumno = async(alumno) => {
        if(this.notasAlumnos.length === 0) {
            alumno.id = 1
        } else {
            alumno.id = this.notasAlumnos[this.notasAlumnos.length - 1].id+1
        }
        this.notasAlumnos.push(alumno)
        return alumno
    }
    
    getAllNotasAlumnos = async() => {
        const allNotas = await this.notasAlumnos
        if(allNotas.length > 0){
            return await allNotas
        } else {
            return "No hay alumnos ingresados"
        }
    }

    getPromedio = async() => {
        let acum = 0;
        if(this.notasAlumnos.length > 0){
            this.notasAlumnos.forEach(nota => acum += nota.nota)
            const promedio = acum / this.notasAlumnos.length
            return `El promedio de notas ingresadas hasta el momento es: ${promedio}`
        } else {
            return "No hay notas ingresadas"
        }

    }

    getAlumnoNotaMasBaja = async() => {
        if(this.notasAlumnos.length > 0){
            let alumnoNotaMasBaja = this.notasAlumnos[0]
            this.notasAlumnos.forEach(alumno => {
                if (alumno.nota < alumnoNotaMasBaja.nota){
                    alumnoNotaMasBaja = alumno
                }
            })
            return `La nota más baja es ${alumnoNotaMasBaja.nota} del parcial de ${alumnoNotaMasBaja.nombre}`
        } else {
            return "No hay notas ingresadas"
        }
    }

    getAlumnoNotaMasAlta = async() => {
        if(this.notasAlumnos.length > 0){
            let alumnoNotaMasAlta = this.notasAlumnos[0]
            this.notasAlumnos.forEach(alumno => {
                if (alumno.nota > alumnoNotaMasAlta.nota){
                    alumnoNotaMasAlta = alumno
                }
            })
            return `La nota más alta es ${alumnoNotaMasAlta.nota} del parcial de ${alumnoNotaMasAlta.nombre}`
        } else {
            return "No hay notas ingresadas"
        }
    }
}


export default AlumnosMEMModel
