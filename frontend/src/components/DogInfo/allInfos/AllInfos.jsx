import './allinfos.css'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"




const AllInfos = () => {
    const dogDatas = [
        {
            user_id:1,
            dog_id: 3,
            dog_pictures: {
                picture_url_1: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fanimaux.2Fchiens-et-chats-de-race.2Fle-samoyede-un-chien-blanc-comme-neige-38409.2F14512148-1-fre-FR.2Fle-samoyede-un-chien-blanc-comme-neige.2Ejpg/1200x1200/quality/80/crop-from/center/le-samoyede-un-chien-blanc-comme-neige.jpeg',
                picture_url_2: 'https://jardinage.lemonde.fr/images/dossiers/2017-12/samoyede-1-081533.jpg',
                picture_url_3: 'https://www.espace-sciences.org/sites/default/files/styles/l980h562_1_744_/public/images/sciences-ouest/dossiers/chien_blanc_630x380.jpg?itok=sKxw81ev',
                picture_url_4: 'https://upload.chien.com/img_global/4-361--/_medium-404612--.jpg',},
            dog_name: 'Pookie',
            dog_age: 3,
            dog_race: 'Berger Allemand',
            favorites: true,
            dog_description: 'Beautiful dog',
            dog_hobbies: ['Gym', 'Eat', 'Run'],
            dog_health: 'His heallth is perfect',
            dog_reproduction: true,
        },
        {
            user_id: 2,
            dog_id: 4,
            dog_pictures:{
                picture_url_1: 'https://lh3.googleusercontent.com/proxy/a4bj-Qsg_6ognxer6Y4rva7cVfKrph1QqBAAGR4YYj6o2aUE6V2xvshLbgzR1kAnQYHSen-htSRxJYz-WYesW_oGM_Ac6cJuNr3wJPDt9dkwdGdOvoOtqN8',
                picture_url_2: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fanimaux.2Fchiens-et-chats-de-race.2Fchiens-de-race.2Fle-braque-de-weimar-00301.2F442233-2-fre-FR.2Fle-braque-de-weimar-l-elegance-grise.2Ejpg/1200x1200/quality/80/crop-from/center/le-braque-de-weimar-l-elegance-grise.jpeg',
                picture_url_3: 'https://animalaxy.fr/wp-content/uploads/2020/01/iStock-1169038221-scaled.jpg',
                picture_url_4: '',},
            dog_name: 'Bella',
            dog_age: 2,
            dog_race: 'Labrador Retriever',
            favorites: false,
            dog_description: 'Beautiful dog',
            dog_hobbies: ['Swimming', 'Fetching Balls', 'Sleeping'],
            dog_health: 'Needs regular exercise',
            dog_reproduction: false,
        },
        {
            user_id: 3,
            dog_id: 5,
            dog_pictures: {
                picture_url_1: 'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=1200,fit=cover/article/main-picture/labrador-noir-chiot.jpg',
                picture_url_2: 'https://assets-global.website-files.com/62b2d13ccd148d1bccca591c/647a0900d5bc87df7ce01189_chien-noir.jpg',
                picture_url_3: 'https://media.istockphoto.com/id/508855550/fr/photo/gros-plan-dun-%C3%A0-lavant-de-labrador-dans-un-fond-blanc.jpg?s=612x612&w=0&k=20&c=-1FpwCMN-cM3ar_YxkrIHK_AR-6o-RuRfoR0ghqOZRs=',
                picture_url_4: '',},
            dog_name: 'Max',
            dog_age: 4,
            dog_race: 'Golden Retriever',
            favorites: true,
            dog_description: 'Beautiful dog',
            dog_hobbies: ['Hiking', 'Playing Fetch', 'Cuddling'],
            dog_health: 'Excellent health',
            dog_reproduction: true,
        }, 
    ]
    const dog = dogDatas.find(dog => dog.dog_id === 5);

    return (
        <>
            {dog && ( 
                <div className='infos_lists'>
                    <div className="name_and_age">
                        <h3 className='dog_name'>Name: {dog.dog_name}</h3>
                        <p className='dog_age'>Age: {dog.dog_age} years</p>
                    </div>
                    <Separator />
                    <div className="hobbies">
                        <h4 className='title_infos'>Hobbies</h4>
                        {dog.dog_hobbies.map((hobby, index) => (
                            <Badge variant="outline" className='hobbies_badge' key={index}>{hobby}</Badge>
                        ))}
                    </div>
                    <Separator />
                    <div className="description">
                        <h4 className='title_infos'>Description</h4>
                        <p>{dog.dog_description}</p>
                    </div>
                    <Separator />
                    <div className="health_dog">
                        <h4 className='title_infos'>Health of Dog</h4>
                        <p>{dog.dog_health}</p>
                    </div>
                    <Separator />
                    <div className="historic_reproduction">
                        <h4 className='title_infos'>Historical Reproduction</h4>
                        <p>{dog.dog_reproduction ? <Badge style={{backgroundColor: '#FF6C00'}}>0 reproduction</Badge> : <Badge style={{backgroundColor: 'black'}}>+1 reproduction</Badge>}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default AllInfos;