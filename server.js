require('./config/db.config');

const express = require('express');
const app = express();

const User = require('./models/User')

//GET RETURN ALL ROUTES
app.get('/users', async (request,response) => {
    const users = await User.find();
    response.json(users);
});


//POST :  ADD A NEW USER TO THE DATABASE 
app.post('/user/new', (request,response) => {
    const user = new User({
        username: request.body.username.value,
        email: request.body.email.value
    })

    response.save();
    response.json(user);
});

//PUT : EDIT A USER BY ID 
app.put('/user/update/:id', (request,response) => {
    const {id} = request.params
    const user = User.findById(id)

    user.username = request.body.username;
    user.email = request.body.email;

    response.save();
    response.json(user);
});

//DELETE : REMOVE A USER BY ID 

app.delete('/user/delete/:id', async (request,response) => {
    const {id} = request.params;
    const user = await findByIdAndDelete(id);

    response.json(user);
})

app.listen(3001, () => console.log('Server running on port 3001'));
