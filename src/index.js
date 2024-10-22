import express from 'express'
import AlumnosRouter from './routes/alumnos.route.js'

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new AlumnosRouter().start())

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`)
})

app.on("error", (error) => {
    console.log(`Error: ${error}`)
})