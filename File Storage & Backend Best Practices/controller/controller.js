const fs = require('fs');
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.min': 'Username must habe a minimum of 3 characters',
            'string.max': 'Username must not be more than 30 letters'
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Email must be a valid email address'
        }),
    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.min': 'your password must have at least 6 characters'
        })
});

const loadUsers = () => {
    const data = fs.readFileSync('users.json');
    return JSON.parse(data);
};

const saveUsers = (users) => {
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

const registerUser = (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const users = loadUsers();
    const { username, email, password } = req.body;

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        username,
        email,
        password
    };

    users.push(newUser);
    saveUsers(users);

    res.status(201).json({user: newUser });
};

const getAllUsers = (req, res) => {
    const users = loadUsers();
    res.status(200).json(users);
};

const getUserById = (req, res) => {
    const users = loadUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
};

const updateUser = (req, res) => {
    let users = loadUsers();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex === -1) return res.status(404).json({ message: 'User does not exist so cannot be updated' });

    const updatedUser = {
        ...users[userIndex],
        ...req.body,
        id: users[userIndex].id
    };

    users[userIndex] = updatedUser;
    saveUsers(users);

    res.status(200).json({ message: 'User has been updated', user: updatedUser });
};

const deleteUser = (req, res) => {
    let users = loadUsers();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex === -1) return res.status(404).json({ message: 'User does not exist, so can not be deleted' });

    const deletedUser = users.splice(userIndex, 1)[0];
    saveUsers(users);

    res.status(200).json({ message: 'User has been deleted', user: deletedUser });
};

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
