require('./config/db.config');
require('dotenv').config();

const express = require('express');
const app = express();

const User = require('./models/User')

//GET RETURN ALL ROUTES
app.get('/users', async (request,response) => {
    const users = await User.find();
    return response.json(users);
});


//POST :  ADD A NEW USER TO THE DATABASE 
app.post('/user/new', (request,response) => {
    const user = new User({
        username: request.body.username.value,
        email: request.body.email.value
    })

    response.save();
    return response.json(user);
});

//PUT : EDIT A USER BY ID 
app.put('/user/update/:id', (request,response) => {
    const {id} = request.params
    const user = User.findByIdAndUpdate(id, {
        username: request.body.username.value,
        email: request.body.email.value
    },{new: true},(error,user) => !error ? console.log(user):console.error(error))

    response.save();
    return response.json(user);
});

//DELETE : REMOVE A USER BY ID 

app.delete('/user/delete/:id', async (request,response) => {
    const {id} = request.params;
    const user = await findByIdAndDelete(id);

    return response.json(user);
})

app.listen(process.env.PORT, () => console.log('Server running on port : ', process.env.PORT));
