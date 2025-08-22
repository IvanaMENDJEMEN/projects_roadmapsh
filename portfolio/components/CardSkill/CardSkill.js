import '../CardSkill/CardSkill.css'
import Image from 'next/image'


export default function CardSkill(props){
    return(
        <div className='card-skill cadre'>
            <div class="card-skill-image">
                <Image
                    src={props.image}
                    alt={props.alt}
                    width={100}
                    height={100}
                />
            </div>
            <h3 class="card-skill-label">{props.label}</h3>
            <p class="card-skill-description">{props.description}</p>
            
        </div>
    )

}