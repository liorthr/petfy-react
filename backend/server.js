// // Import the express module
// import express from 'express';
// import  db  from './config/firebase.js';
// import { collection, getDocs } from 'firebase/firestore';

// // Create an Express application
// const app = express();

// // Define a port number
// const PORT = 3000;


// // Middleware to parse JSON and urlencoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static files middleware (for serving static files like images, CSS, JavaScript files, etc.)
// app.use(express.static('public'));

// // Route for the homepage
// app.get('/', (req, res) => {
//   res.send('Hello, welcome to my server! for Petfy');
// });

// // Route to get all users
// app.get('/users', async (req, res) => {
//   try {
//     const usersCol = collection(db, 'users'); // Replace 'users' with your collection name
//     const userSnapshot = await getDocs(usersCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     res.status(200).json(userList);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).send('Error fetching users');
//   }
// });


// // Catch-all route for 404 Not Found
// app.use((req, res, next) => {
//   res.status(404).send('Sorry, page not found!');
// });

// // Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js

import express from 'express';
import userRoutes from './routes/users.routes.js'; // Adjust the path as necessary

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

