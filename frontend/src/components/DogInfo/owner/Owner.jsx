import './owner.css'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';



const Owner = () => {

    const ownerData = [
        {
            id_user: 1,
            id_dogs: 2,
            name: 'Omer Adam',
            location: 'Savyon',
        },
        {
            id_user: 2,
            id_dogs: 2,
            name: 'Eyal Golan',
            location: 'Tel Aviv',
        },
        {
            id_user: 3,
            id_dogs: 2,
            name: 'Eden Hasson',
            location: 'Jerusalem',
        },
    ]
    const owner = ownerData.find(owner => owner.id_user === 1);

    return(
        <>
        {owner && ( // Check if the owner is found
            <div className='owner_box'>
                <div className="owner_top">
                     <h3 style={{fontWeight: 'bold'}}>Owner informations</h3>
                    <Separator />
                    <h5>{owner.name}</h5>
                        <div className="location-info">
                            <FontAwesomeIcon icon={faLocationDot} /><h6>{owner.location}</h6>
                        </div>
                    </div>
                <div className="owner_bottom">
                <Button  style={{backgroundColor: '#fbc500', borderRadius: '16px', color:'black'}} onClick={()=>alert('You clicked')}>Meet the owner</Button>
                </div>
            </div>
        )}
        </>
    )
}

export default Owner;