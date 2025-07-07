const express = require('express');
const router = express.Router();
const {
    registerUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controller/controller');

router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
