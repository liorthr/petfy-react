import './postpicture.css'
import PictureData from './PictureData/PictureData';
import { Button } from "@/components/ui/button"


const PostPicture = () => {
    return(
        <>
        {/* Back: 
        1.connect to an user 
        PostPicture:
        1. Add picture on Firebase with 'choose file' and 'Upload' */}
        
        <PictureData/>
        <br />
        <Button onClick={()=>alert('You send post')}>Post</Button>
        </>
    )
}

export default PostPicture;