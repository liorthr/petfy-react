import React, { useState, useEffect } from 'react';
import './favorites.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import { AlertDemo } from '../Alert/Alert';

const Favorites = () => {
    const [DataDogs, setDataDogs] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/dogs/favorites')
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

    const handleButtonClick = () => {
        setTimeout(() => {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }, 1000);
    };


    return(
        <>
        <br /><br /><br /><br /><br />
        <div className='list_of_cards'>
                {DataDogs.map((dog, index) => (
                    <div key={index} className="card-type" style={{ backgroundImage: `url(${dog.dog_picture})` }}>
                        <div className="top-card">
                            {/* <div className="fav_button">
                                <FontAwesomeIcon 
                                    icon={dog.favorites ? faHeartSolid : faHeartRegular} 
                                    onClick={() => toggleFavorite(dog.id)} 
                                    style={{ color: "#FF6C00" }}
                                />
                            </div> */}
                        </div>
                        <div className="bottom-card">
                            <div className="dog-info">
                                <h5><strong>{dog.dog_name},</strong> {dog.dog_age} years <strong>{dog.dog_breed}</strong></h5>
                            </div>
                            <button className='card_button' onClick={handleButtonClick}>Dater ce chien</button>
                        </div>
                    </div>
                ))}
            </div>
            {showAlert && <AlertDemo />}
        </>
    )
}
export default Favorites;

