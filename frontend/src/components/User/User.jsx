import './user.css'
import React, {uses} from 'react';
import { Separator } from "@/components/ui/separator"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone,faPaw,faLocationDot,faPencil } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';



const User = () => {
    const users = [
        {
            user_id: 1,
            user_name: 'Omer Adam',
            user_mail: 'omeradam@gmail.com',
            user_tel: '+972586841111',
            user_location: 'Savyon',
            user_dog: { dog_id: [737, 215] },
        },
        {
            user_id: 2,
            user_name: 'Sarah Levi',
            user_mail: 'sarahlevi@example.com',
            user_tel: '+972504455667',
            user_location: 'Tel Aviv',
            user_dog: { dog_id: [442, 119] },
        },
        {
            user_id: 3,
            user_name: 'Tomer Cohen',
            user_mail: 'tomercohen@example.com',
            user_tel: '+972533442211',
            user_location: 'Jerusalem',
            user_dog: { dog_id: [874] },
        },
        {
            user_id: 4,
            user_name: 'Noa Fisher',
            user_mail: 'noafisher@example.com',
            user_tel: '+972585551234',
            user_location: 'Haifa',
            user_dog: { dog_id: [359, 981, 332] },
        },
    ]
    const userSelected = users.find(user => user.user_id === 1);

    if (!userSelected) return null;

    // Destructuring the userSelected object
    const { user_name, user_mail, user_tel, user_location, user_dog } = userSelected;
    const navigate = useNavigate()

    return (
        <div className="user_infos">
            <div className="user_name"><h1>{user_name}</h1></div>
            <Separator />
            <div className="user_mail"><FontAwesomeIcon icon={faEnvelope} style={{color:'#FF6C00'}}/> Mail: {user_mail}</div>
            <div className="user_tel"><FontAwesomeIcon icon={faPhone} style={{color:'#FF6C00'}}/> Tel: {user_tel}</div>
            <div className="user_location"><FontAwesomeIcon icon={faLocationDot} style={{color:'#FF6C00'}}/> City: {user_location}</div>
            <div className="user_dogs">
                <FontAwesomeIcon icon={faPaw} style={{color:'#FF6C00'}} /> Dogs: {user_dog.dog_id.map((id) => <p key={id}>{id}</p>)}
            </div>
            <Button onClick={()=>navigate('/update-user')}><FontAwesomeIcon icon={faPencil} /></Button>
        </div>
    );
}

export default User;