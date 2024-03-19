import './updateuser.css';
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaw, faLocationDot, faFloppyDisk,faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../ui/button';
import { Input } from "@/components/ui/input"

const User = () => {
    const [users, setUsers] = useState([
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
    ]);

    const [editData, setEditData] = useState({
        user_name: '',
        user_mail: '',
        user_tel: '',
        user_location: '',
        user_dog: '',
    });

    const userSelected = users.find(user => user.user_id === 1);

    if (!userSelected) return null;

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const updatedUsers = users.map(user => {
            if (user.user_id === 1) { 
                return {
                    ...user,
                    user_name: editData.user_name || user.user_name,
                    user_mail: editData.user_mail || user.user_mail,
                    user_tel: editData.user_tel || user.user_tel,
                    user_location: editData.user_location || user.user_location,
                    user_dog: { dog_id: editData.user_dog ? editData.user_dog.split(',').map(Number) : user.user_dog.dog_id },
                };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <div className="user_infos">

            <h1>Update your informations</h1>
            <Input name="user_name" placeholder="Edit name" onChange={handleChange} />
            <br />
            <Input name="user_mail" placeholder="Edit mail" onChange={handleChange} />
            <br />
            <Input name="user_tel" placeholder="Edit tel" onChange={handleChange} />
            <br />
            <Input name="user_location" placeholder="Edit location" onChange={handleChange} />
            <br />
            <Input name="user_dog" placeholder="Edit dogs (comma separated)" onChange={handleChange} />
            <br />
            {/* Submit button */}
            <div className="button">
            <Button onClick={handleSubmit}><FontAwesomeIcon icon={faFloppyDisk} /> Save Changes</Button> {" "}
            <Button onClick={()=>alert('back to User.jsx')} variant="destructive"><FontAwesomeIcon icon={faXmark} />Cancel</Button>
            </div>
        </div>
    );
}

export default User;


