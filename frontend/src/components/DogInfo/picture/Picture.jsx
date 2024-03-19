import './picture.css'
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Picture = () => {
    const pictureDogData = [
        {
            id: 1,
            picture_url: {
                picture_url_1: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fanimaux.2Fchiens-et-chats-de-race.2Fle-samoyede-un-chien-blanc-comme-neige-38409.2F14512148-1-fre-FR.2Fle-samoyede-un-chien-blanc-comme-neige.2Ejpg/1200x1200/quality/80/crop-from/center/le-samoyede-un-chien-blanc-comme-neige.jpeg',
                picture_url_2: 'https://jardinage.lemonde.fr/images/dossiers/2017-12/samoyede-1-081533.jpg',
                picture_url_3: 'https://www.espace-sciences.org/sites/default/files/styles/l980h562_1_744_/public/images/sciences-ouest/dossiers/chien_blanc_630x380.jpg?itok=sKxw81ev',
                picture_url_4: 'https://upload.chien.com/img_global/4-361--/_medium-404612--.jpg',
                },
        },
        {
            id: 2,
            picture_url: {
                picture_url_1: 'https://lh3.googleusercontent.com/proxy/a4bj-Qsg_6ognxer6Y4rva7cVfKrph1QqBAAGR4YYj6o2aUE6V2xvshLbgzR1kAnQYHSen-htSRxJYz-WYesW_oGM_Ac6cJuNr3wJPDt9dkwdGdOvoOtqN8',
                picture_url_2: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fanimaux.2Fchiens-et-chats-de-race.2Fchiens-de-race.2Fle-braque-de-weimar-00301.2F442233-2-fre-FR.2Fle-braque-de-weimar-l-elegance-grise.2Ejpg/1200x1200/quality/80/crop-from/center/le-braque-de-weimar-l-elegance-grise.jpeg',
                picture_url_3: 'https://animalaxy.fr/wp-content/uploads/2020/01/iStock-1169038221-scaled.jpg',
                picture_url_4: '',
                },  
        },{
            id: 3,
            picture_url:{
                picture_url_1: 'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=1200,fit=cover/article/main-picture/labrador-noir-chiot.jpg',
                picture_url_2: 'https://assets-global.website-files.com/62b2d13ccd148d1bccca591c/647a0900d5bc87df7ce01189_chien-noir.jpg',
                picture_url_3: 'https://media.istockphoto.com/id/508855550/fr/photo/gros-plan-dun-%C3%A0-lavant-de-labrador-dans-un-fond-blanc.jpg?s=612x612&w=0&k=20&c=-1FpwCMN-cM3ar_YxkrIHK_AR-6o-RuRfoR0ghqOZRs=',
                picture_url_4: '',
            },
        },   
    ]
    const dogWithId1 = pictureDogData.find(dog => dog.id === 3);
    return(
        <div className='picture_component'>
            <Carousel className="w-full max-w-xs" >
                <CarouselContent>
                    {dogWithId1 && Object.values(dogWithId1.picture_url).map((url, index) => (
                        url && ( // Only proceed if the URL is not an empty string
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card style={{backgroundColor: '#FF6C00', border: '1px solid #FF6C00'}}>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={url} alt={`Dog ${index + 1}`} className="object-cover" /> {/* Ensure your CSS supports object-cover */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Picture;