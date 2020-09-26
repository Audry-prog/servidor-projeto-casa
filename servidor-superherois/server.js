const app = require('./src/app');
const port = 8080;

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
});