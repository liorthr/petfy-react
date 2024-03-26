import './picturedata.css'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"



const PictureData = () => {
    return(
        <div className='picture_data'>
        PictureData:
        <div className="data_name">
            <Input type='text' placeholder='Enter the dog name'/>
        </div>
        <div className="data_age">
            <Input type='number' placeholder='Enter the dog age'/>
        </div>
        <div className="data_race">
            {/* <Input type='text'placeholder='Enter the breed of dog'/> */}
            change for dropdown
        </div>
        <div className="data_description">
            <Textarea placeholder='Tell us about your dog: his life, what he likes to do, where he has already traveled, where he comes from'/>
        </div>
        <div className="data_health">
            <Textarea placeholder='He is in very good health. And has already had tetanus'/>
        </div>
        <div className="data_reproduction">
            <div className="flex items-center space-x-2">Has he ever had partners, relationships with other dogs? 
            <br />
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">No</label>
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Yes</label>
            </div>
        </div>

        </div>
    )
}
export default PictureData;
