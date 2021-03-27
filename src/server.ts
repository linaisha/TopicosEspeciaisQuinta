import express, {Request, response, Response} from "express";

const app = express();
app.use(express.json());

console.clear();

// Métodos HTTP -> GET, POST
// GET -> Solicitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World com ts-node-dev mais uma vez!")
});

app.get("/ciclo/listar/:rg/:telefone", (request: Request, response: Response) => {
    const {rg, telefone} = request.params;
    console.log(rg , telefone);

    const objeto = {
        nome : "Diogo Steinke Deconto",
        cpf : "111.111.111-11",
        idade : 31,
        rg, 
        telefone
    };
    response.json(objeto);
});

app.post("/ciclo/cadastrar",(request: Request, repsonse: Response) => {
    const pessoa = request.body;
    const objeto = { msg: "Cliente cadastrado com sucesso!",
    pessoa
};
    response.json(objeto);
});

app.listen(3000, () => {
    console.log("O servidor está rodando...")
});
