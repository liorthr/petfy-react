import express from 'express';
import {
    _getAllUsers,
    _getUser, 
    _getDogs, 
    _getDogsByBreed,
    _getFavoriteDogs, 
    _createUser,
    _createDog,
    _login,
    _register,
    _verifyGoogleToken,
    _updateUserDetails,
    _updateDogDetails,

 } from '../controllers/users.controllers.js';

const router = express.Router();

//GET
router.get('/users', _getAllUsers);
router.get('/users/id/:id', _getUser); 
router.get('/dogs', _getDogs);
router.get('/dogs/breed/:breed', _getDogsByBreed);
router.get('/dogs/favorites', _getFavoriteDogs);

//POST
router.post('/user/addNewUser', _createUser);
router.post('/dogs/addNewDog', _createDog);

//UPDATE
router.put('/users/update-user-data/:id', _updateUserDetails);
router.put('/dogs/update-dog-data/:id', _updateDogDetails);  // Use PUT for update operations



//AUTH
router.post('/register', _register);
router.post('/login', _login);
router.post('/verify-google-token', _verifyGoogleToken);//need to test



//CHAT




export default router;
