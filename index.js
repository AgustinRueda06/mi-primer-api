import express from 'express';
const app = express();
app.get("*/*", (req, res) => {
    res.send("Hola mundo");
});

app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Datos recibidos");
}); 
