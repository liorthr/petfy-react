// import './App.css'
// import Auth from './components/Auth/Auth'
// import Card from './components/Card/Card'
// import UserChat from './components/Chat/UserChat'
// import UserList from './components/Chat/UserList'
// import DogInfo from './components/DogInfo/DogInfo'
// import NavBar from './components/Navbar/NavBar'
// import PostPicture from './components/PostPicture/PostPicture'
// import User from './components/User/User'
// import UpdateUser from './components/User/updateUser/UpdateUser'
// import { PostDog2 } from './components/PostDog2/PostDog2'
// function App() {

//   return (
//     <>
//     {/* <NavBar/>  */}
//     {/* <br />
//     <br />
//     <br /> */}
//      {/* <Auth/>  */}
//     {/* <Card/> v*/} 
//     {/* <UserChat/>
//     <UserList/> */}
//     {/* <DogInfo/> v*/} 
//     {/* <PostPicture/>  */}
//     {/* <User/> v*/}
//     {/* <UpdateUser/> v*/} 
//     {/* <PostDog2/> xxxxxx*/}
//     </>
//   )
// }

// export default App

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'; // Adjust the import path as needed
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import Chat from './components/Chat/UserChat';
import PostPicture from './components/PostPicture/PostPicture';
import User from './components/User/User';
import DogInfo from './components/DogInfo/DogInfo';
import UpdateUser from './components/User/updateUser/UpdateUser'
function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* NavBar is now within BrowserRouter */}
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/post-picture" element={<PostPicture />} />
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dog-info" element={<DogInfo />} />
        <Route path="/update-user" element={<UpdateUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

// Assuming you're using React 18 and above for rendering
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
export default App;