// routes/userRoutes.js

import express from 'express';
import {
    _getAllUsers,
    _getUser,
    _getUsersWithFavorites, 
    _getDogs, 
    _getDogsByBreed,
    _getFavoriteDogs, 
    _createUser,
    _createDog,
 } from '../controllers/users.controllers.js';

const router = express.Router();

//GET
router.get('/users', _getAllUsers);
router.get('/users/id/:id', _getUser); 
router.get('/users/favorites', _getUsersWithFavorites);
router.get('/dogs', _getDogs);
router.get('/dogs/breed/:breed', _getDogsByBreed);
router.get('/dogs/favorites', _getFavoriteDogs);

//POST
router.post('/user/addNewUser', _createUser);
router.post('/dogs/addNewDog', _createDog);

//UPDATE

//AUTH

//CHAT




export default router;
