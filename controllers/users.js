import {v4 as uuidv4} from 'uuid'
let users = []

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users)
}

export const createUser = (req, res) => {
    const user =  req.body;

    users.push({...user, id: uuidv4()});
    res.send(`User ${user.name} added susccesfully`);
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find( (user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser =  (req, res) =>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    //Validation if user exists
    res.send(`User with ${id} has been deleted`);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, lastname, age} = req.body;
    const userId = users.find((user) => user.id === id);
    if (name) userId.name = name;
    if (lastname) userId.lastname = lastname;
    if (age) userId.age = age;
    res.send(`The user ${id} has been updated`)
}