const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/teapot', (req, res) => {
	res.status(418)
	res.set('X-Teapot-Stuff', "You've been tea-potted")
	res.send("I'm a little teapot")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
