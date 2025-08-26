import '../CardSkill/CardSkill.css'
import Image from 'next/image'


export default function CardSkill(props){
    return(
        <div className='card-skill'>
            <div className="card-skill-image">
                <Image
                    src={props.image}
                    alt={props.alt}
                    width={100}
                    height={100}
                />
                
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${props.percentage}%` }}
                ><strong>{props.percentage}%</strong></div>
            </div>
            <h3 className="card-skill-label">{props.label}</h3>
            
        </div>
    )

}