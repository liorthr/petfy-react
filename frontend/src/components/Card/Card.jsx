import './card.css'
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'; // Solid heart
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { AlertDemo } from '../Alert/Alert';

const Card = () => {
    const initialDataDogs = [
        {
            picture_url: 'https://jardinage.lemonde.fr/images/dossiers/categories3/racedecien-083123-650-325.jpg',
            name: 'Pookie',
            age: 1,
            dog_race: 'Berger Allemand',
            favorites: true,
            hobbies: ['surf', 'gym', 'eat'],
            description: 'A big dog very strong very Happy!',
            health_details: 'All its good ',
            historic_reproductions: true,
        },
        {
            picture_url: 'https://assets.mira.ca/images/_carousellarge/Credit-photo-Maude-Fortin.jpg',
            name: 'Bella',
            age: 3,
            dog_race: 'Labrador Retriever',
            favorites: true,
            hobbies: ['Swimming', 'Fetch', 'Napping'],
            description: 'A friendly and energetic dog that loves water and playing with her family.',
            health_details: 'Healthy with regular vet check-ups.',
            historic_reproductions: false,
        },
        {
            picture_url: 'https://www.woopets.fr/assets/img/001/244/1200x675/choisir-chien-japonais.jpg',
            name: 'Max',
            age: 4,
            dog_race: 'Golden Retriever',
            favorites: false,
            hobbies: ['Hiking', 'Cuddling', 'Playing with kids'],
            description: 'A gentle and patient dog, perfect as a family companion.',
            health_details: 'Fit and healthy, on a balanced diet.',
            historic_reproductions: true,
        },
        {
            picture_url: 'https://cdn.shopify.com/s/files/1/0549/9774/5782/files/danois_chien-min_480x480.jpg?v=1670241109',
            name: 'Luna',
            age: 2,
            dog_race: 'Siberian Husky',
            favorites: true,
            hobbies: ['Running', 'Sledding', 'Exploring'],
            description: 'A high-energy dog with a love for adventure and the outdoors.',
            health_details: 'Energetic and healthy, but prone to wanderlust.',
            historic_reproductions: false,
        },
        {
            picture_url: 'https://www.leparisien.fr/resizer/qWvex3A2HTzkJ9elmcD72_6YpKM=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/JM6XAGGOCREQNECD4PASNKYQII.jpg',
            name: 'Charlie',
            age: 5,
            dog_race: 'Border Collie',
            favorites: false,
            hobbies: ['Agility training', 'Herding', 'Learning tricks'],
            description: 'An intelligent and agile dog, always ready for a mental and physical challenge.',
            health_details: 'In top shape, enjoys a well-structured routine.',
            historic_reproductions: true,
        },
        {
            picture_url: 'https://images.ctfassets.net/denf86kkcx7r/3KAW3ZtZZONzfHH47xWocR/b78710225146139041fcb7b8eb9f2a7f/chiot_Cavalier_King_Charles?fm=webp&w=612',
            name: 'Daisy',
            age: 2,
            dog_race: 'Beagle',
            favorites: true,
            hobbies: ['Sniffing', 'Trail walking', 'Playing hide and seek'],
            description: 'A curious and loving dog with an incredible sense of smell.',
            health_details: 'Healthy, with a keen sense for adventure.',
            historic_reproductions: false,
        },
    ];
    const [DataDogs, setDataDogs] = useState(initialDataDogs);
    const [showAlert, setShowAlert] = useState(false); 

    const toggleFavorite = (index) => {
        const newDataDogs = DataDogs.map((dog, idx) => {
            if (idx === index) {
                return { ...dog, favorites: !dog.favorites };
            }
            return dog;
        });
        setDataDogs(newDataDogs);
    };
    
    const handleButtonClick = () => {
        // Show the alert after 1 second
        setTimeout(() => {
            setShowAlert(true);
    
            // Hide the alert after 3 more seconds
            setTimeout(() => setShowAlert(false), 3000);
        }, 0);
    };
     
    return(
        <>
         <div className='list_of_cards'>
            {DataDogs.map((dog, index) => (
                <div key={index} className="card-type" style={{ backgroundImage: `url(${dog.picture_url})` }}>
                <div className="top-card">
                    <FontAwesomeIcon 
                        icon={dog.favorites ? faHeartSolid : faHeartRegular} 
                        onClick={() => toggleFavorite(index)} // Using toggleFavorite function on click
                    />
                </div>
                    <div className="bottom-card">
                    <div className="dog-info">
                                    <h5><strong>{dog.name},</strong> {dog.age} years <strong>{dog.dog_race}</strong></h5>
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

export default Card;