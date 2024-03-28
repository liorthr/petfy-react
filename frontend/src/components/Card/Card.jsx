import React, { useState, useEffect } from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import { AlertDemo } from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';

// const Card = () => {
//     const [DataDogs, setDataDogs] = useState([]);
//     const [showAlert, setShowAlert] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch('http://localhost:3000/dogs')
//             .then(response => response.json())
//             .then(setDataDogs)
//             .catch(console.error);
//     }, []);

//     // const toggleFavorite = (dogId) => {
//     //     fetch(`http://localhost:3000/dogs/${dogId}/toggleFavorite`, {
//     //         method: 'PUT',
//     //     })
//     //     .then(response => response.json())
//     //     .then(updatedDog => {
//     //         const updatedDogs = DataDogs.map(dog => dog.id === dogId ? updatedDog : dog);
//     //         setDataDogs(updatedDogs);
//     //     })
//     //     .catch(console.error);
//     // };

//     const handleButtonClick = () => {
//         setTimeout(() => {
//             setShowAlert(true);
//             setTimeout(() => setShowAlert(false), 3000);
//         }, 1000);
//     };

//     return (
//         <>
//             <div className='list_of_cards'>
//                 {DataDogs.map((dog, index) => (
//                     <div key={index} className="card-type" style={{ backgroundImage: dog.dog_picture && dog.dog_picture[0] ? `url(${dog.dog_picture[0]})` : '' }}>
//                         <div className="top-card">
//                             {/* <div className="fav_button">
//                                 <FontAwesomeIcon 
//                                     icon={dog.favorites ? faHeartSolid : faHeartRegular} 
//                                     onClick={() => toggleFavorite(dog.id)} 
//                                     style={{ color: "#FF6C00" }}
//                                 />
//                             </div> */}
//                         </div>
//                         <p>{dog.dog_id}</p>
//                         <div className="bottom-card">
//                             <div className="dog-info">
//                                 <h5><strong>{dog.dog_name},</strong> {dog.dog_age} years <strong>{dog.dog_breed}</strong></h5>
//                             </div>
//                             {/* <button className='card_button' onClick={handleButtonClick}>Dater ce chien</button> */}
//                             {/* <button className='card_button' onClick={()=>navigate('/dog-info')}>Dater ce chien</button> */}
//                             <button className='card_button' onClick={()=>console.log(`te${dog.dog_id}`)}>Dater ce chien</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {showAlert && <AlertDemo />}
//         </>
//     );
// };

const Card = () => {
    const [DataDogs, setDataDogs] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
            .then(response => response.json())
            .then(setDataDogs)
            .catch(console.error);
    }, []);

    // const toggleFavorite = (dogId) => {
    //     fetch(`http://localhost:3000/dogs/${dogId}/toggleFavorite`, {
    //         method: 'PUT',
    //     })
    //     .then(response => response.json())
    //     .then(updatedDog => {
    //         const updatedDogs = DataDogs.map(dog => dog.id === dogId ? updatedDog : dog);
    //         setDataDogs(updatedDogs);
    //     })
    //     .catch(console.error);
    // };

    const handleButtonClick = (dogId) => {
        console.log(`Dog ID: ${dogId}`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <>
            <div className='list_of_cards'>
                {DataDogs.map((dog) => (
                    <div key={dog.id} className="card-type" style={{ backgroundImage: dog.dog_picture && dog.dog_picture[0] ? `url(${dog.dog_picture[0]})` : '' }}>
                        <div className="top-card">
                            {/* <div className="fav_button" onClick={() => toggleFavorite(dog.id)}>
                                <FontAwesomeIcon 
                                    icon={dog.favorites ? faHeartSolid : faHeartRegular} 
                                    style={{ color: "#FF6C00" }}
                                /> 
                                
                                {dog.favorites ? '❤️' : '🤍'}
                            </div> */}
                        </div>
                        <p>{dog.id}</p>
                        <div className="bottom-card">
                            <div className="dog-info">
                                <h5><strong>{dog.dog_name},</strong> {dog.dog_age} years <strong>{dog.dog_breed}</strong></h5>
                            </div>
                            <button className='card_button' onClick={() => handleButtonClick(dog.id)}>Dater ce chien</button>
                        </div>
                    </div>
                ))}
            </div>
            {showAlert && <AlertDemo />}
        </>
    );
};


export default Card;
