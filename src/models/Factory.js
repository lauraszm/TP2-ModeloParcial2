import AlumnosFSModel from "./DAO/alumnos.model.fs.js";
import AlumnosMEMModel from "./DAO/alumnos.model.mem.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new AlumnosMEMModel()
            case "FS":
                console.log("Persistiendo en la memoria del servidor")
                return new AlumnosFSModel()
            default:
                console.log("Opcion default")
                return new AlumnosModel()
        }
    }
}

export default Factory