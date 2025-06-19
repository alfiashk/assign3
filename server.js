const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];


app.post('/users',(req, res) => {
    const { name, age } = req.body;
    if (typeof name === 'string' && typeof age === 'number') {
        if (!users.some(user => user.name.toLowerCase() === name.toLowerCase())) {
            const newUser = { name, age };
            users.push(newUser);
        } else {
            return res.json({ error: 'user already exists' });
        }

        return res.json({ message: 'User added' });
    
    } else {
        return res.json({ error: 'Name must be a string and age must be a number' });
    }
    });

app.get('/users', (req, res) => {
    res.json(users);
});


app.listen(port, () => {
    console.log('listening to port 3000');
})