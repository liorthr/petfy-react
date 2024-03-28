// controllers/usersController.js

import { 
    getUsers,
     getUserById, 
     getAllDogs, 
     getDogById,
     getAllDogsWhereBreedIs, 
     getAllDogsFavorites, 
     addUser,
     addDog,
     updateUser,
     updateDog,

     } from '../models/users.models.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../config/firebase.js'


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

//getDogByID
export const _getDogById = async (req, res) => {
  try {
    const dogId = req.params.id; // Get the dog ID from the URL parameters
    const dog = await getDogById(dogId);
    res.status(200).json(dog);
  } catch (error) {
    console.error('Error fetching dog:', error);
    res.status(500).send('Error fetching dog');
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

//login
export const _login = (req, res) => {
  const auth = getAuth();
  const { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User logged in
      res.status(200).json({ message: "User logged in successfully", userId: userCredential.user.uid });
    })
    .catch((error) => {
      console.error('Login error:', error);
      res.status(500).json({ message: "User login failed", error: error.message });
    });
};

//register
export const _register = (req, res) => {
  const auth = getAuth();
  const { email, password } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered
      res.status(201).json({ message: "User registered successfully", userId: userCredential.user.uid });
    })
    .catch((error) => {
      console.error('Registration error:', error);
      res.status(500).json({ message: "User registration failed", error: error.message });
    });
};

//GoogleAuth
export const _verifyGoogleToken = async (req, res) => {
  const idToken = req.body.token;
  
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    // Optionally: Retrieve or create a user in your own database
    res.status(200).json({ uid: uid, message: 'User authenticated successfully' });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ message: 'User not authenticated', error: error.message });
  }
};//need to test

//updateUserData
export const _updateUserDetails = async (req, res) => {
  const userId = req.params.id;  // Assuming the user ID is passed as a URL parameter
  const userData = req.body;

  try {
    await updateUser(userId, userData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

//updateDogData
export const _updateDogDetails = async (req, res) => {
  const dogId = req.params.id;  // Assuming the dog ID is passed as a URL parameter
  const dogData = req.body;

  try {
    await updateDog(dogId, dogData);
    res.status(200).json({ message: 'Dog updated successfully' });
  } catch (error) {
    console.error('Error updating dog:', error);
    res.status(500).json({ message: 'Error updating dog', error: error.message });
  }
};