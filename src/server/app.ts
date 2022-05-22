import express from 'express';

const app = express();
const port = 8080

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})