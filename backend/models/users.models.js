import firebase from '../config/firebase.js'; // Adjust the path as necessary
const { db } = firebase;
import { collection, getDocs, getDoc, doc, query, where, addDoc, updateDoc } from 'firebase/firestore';

//get all users
export const getUsers = async () => {
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);
  return userSnapshot.docs.map(doc => doc.data());
};

//getUserByID
export const getUserById = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error('User not found');
    }
  };

//getAllDogs
export const getAllDogs = async () => {
    const dogsCol = collection(db, 'dogs');
    const dogSnapshot = await getDocs(dogsCol);
    return dogSnapshot.docs.map(doc => doc.data());
  };

//getDogByID
export const getDogById = async (dogId) => {
  const dogRef = doc(db, 'dogs', dogId);
  const dogSnap = await getDoc(dogRef);

  if (dogSnap.exists()) {
    return { id: dogSnap.id, ...dogSnap.data() };
  } else {
    // Handle the case where the document does not exist
    throw new Error('No such document!');
  }
};

//getAllDogsWhereBreedIs
export const getAllDogsWhereBreedIs = async (breed) => {
    const dogsCol = collection(db, 'dogs');
    const q = query(dogsCol, where('dog_breed', '==', breed)); // Query for documents where 'breed' matches the provided breed
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  };

//getAllFavoritesDogs
export const getAllDogsFavorites = async () => {
    const dogsCol = collection(db, 'dogs');
    const q = query(dogsCol, where('dog_favorites', '==', true)); // Query for documents where 'dog_favorites' is true
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  };

//addNewUser
export const addUser = async (userData) => {
    const usersCol = collection(db, 'users');
    const docRef = await addDoc(usersCol, userData);
    return docRef.id;  // Returns the new document's ID
  };

//addNewDog
export const addDog = async (dogData) => {
    const dogsCol = collection(db, 'dogs');
    const docRef = await addDoc(dogsCol, {
      ...dogData,
      dog_owner: doc(db, 'users', dogData.dog_owner)  // Reference to user document
    });
    return docRef.id;
  };

//updateUserData
export const updateUser = async (userId, userData) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, userData);
};

//updateDogData
export const updateDog = async (dogId, dogData) => {
  const dogRef = doc(db, 'dogs', dogId);
  await updateDoc(dogRef, dogData);
};

//updateFavoritesDogs

