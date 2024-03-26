// controllers/usersController.js

import { 
    getUsers,
     getUserById, 
     getAllUsersFavorites, 
     getAllDogs, 
     getAllDogsWhereBreedIs, 
     getAllDogsFavorites, 
     addUser,
     addDog,
     } from '../models/users.models.js';

//getAllUsers
export const _getAllUsers = async (req, res) => {
  try {
    const userList = await getUsers();
    res.status(200).json(userList);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
};

//getUserById
export const _getUser = async (req, res) => {
    try {
      const userId = req.params.id; 
      const user = await getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).send('Error fetching user');
    }
  };

  //getAllFavoritesUsers
  export const _getUsersWithFavorites = async (req, res) => {
    try {
      const userList = await getAllUsersFavorites();
      res.status(200).json(userList);
    } catch (error) {
      console.error('Error fetching users with favorites:', error);
      res.status(500).send('Error fetching users with favorites');
    }
  };

 //getAllDogs
 export const _getDogs = async (req, res) => {
    try {
      const dogsList = await getAllDogs();
      res.status(200).json(dogsList);
    } catch (error) {
      console.error('Error fetching dogs:', error);
      res.status(500).send('Error fetching dogs');
    }
  }; 

//getAllDogsWithBreed
export const _getDogsByBreed = async (req, res) => {
    try {
      const breed = req.params.breed;
      const dogsList = await getAllDogsWhereBreedIs(breed);
      res.status(200).json(dogsList);
    } catch (error) {
      console.error('Error fetching dogs by breed:', error);
      res.status(500).send('Error fetching dogs by breed');
    }
  };

//getAllFAvorites
export const _getFavoriteDogs = async (req, res) => {
    try {
      const dogsList = await getAllDogsFavorites();
      res.status(200).json(dogsList);
    } catch (error) {
      console.error('Error fetching favorite dogs:', error);
      res.status(500).send('Error fetching favorite dogs');
    }
  };

//addNewUser
export const _createUser = async (req, res) => {
    try {
      const userData = {
        user_name: req.body.user_name,
        user_mail: req.body.user_mail,
        user_phone: req.body.user_phone,
        user_location: {  
          latitude: req.body.user_location.latitude,
          longitude: req.body.user_location.longitude
        },
        user_dog: req.body.user_dog  
      };
      
      const newUserId = await addUser(userData);
      res.status(201).send({ id: newUserId, message: 'User added successfully' });
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).send('Error adding user');
    }
  };

//addNewDog
export const _createDog = async (req, res) => {
    try {
      const newDogId = await addDog(req.body);
      res.status(201).json({ id: newDogId, message: 'Dog added successfully' });
    } catch (error) {
      console.error('Error adding dog:', error);
      res.status(500).json({ message: 'Error adding dog', error: error.message });
    }
  };