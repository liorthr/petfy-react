import './userlist.css';


const UserList = () => {
    const usersChat = [
        {
            name: 'Omer Adam',
            user_dog_name: 'Pookie',
        },
        {
            name: 'Tomer',
            user_dog_name: 'Max',
        },
        {
            name: 'Or Cohen',
            user_dog_name: 'Flash',
        },
        {
            name: 'Eyal Golan',
            user_dog_name: 'Toda',
        },
    ];
    
    return (
        <div className="user_list">
            {usersChat.map((user, index) => (
                <div key={index} className="user_card" onClick={()=>alert(`User ${user.name} and dog ${user.user_dog_name}`)}>
                    <div className="user_name"><p>{user.name}</p></div>
                    <div className="user_dog_name"><p>{user.user_dog_name}</p></div>
                </div>
            ))}
        </div>
    );
}

export default UserList;
