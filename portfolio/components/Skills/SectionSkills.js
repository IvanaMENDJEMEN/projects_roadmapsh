import '../Skills/SectionSkills.css'
import CardSkill from '../CardSkill/CardSkill'

export default function SectionSkills(){
    return (
        <section className='section-skill cadre'>
            <div className='section-skill-title'> 
                <h1> Mes Compétences </h1>
            </div>
            <div className='section-skill-card'>
                <CardSkill image='/logo-js.png' alt='Logo-js' label='JavaScript' description='' percentage='57' />
                <CardSkill image='/logo-html.png' alt='Logo-html' label='HTML' description='' percentage='95' />
                <CardSkill image='/logo-css (1).png' alt='Logo-css' label='CSS' description='' percentage='52' />
                <CardSkill image='/logo-git.png' alt='Logo-git' label='Git' description='' percentage='85' />
                <CardSkill image='/logo-linux.png' alt='Logo-linux' label='Linux' description='' percentage='55' />
                <CardSkill image='/logo-bash.png' alt='Logo-bash' label='Shell Bash' description='' percentage='73' />
                <CardSkill image='/react-logo.png' alt='Logo-react' label='React JS' description='' percentage='30' />
                <CardSkill image='/logo-next.png' alt='Logo-next' label='Next JS' description='' percentage='25'/>
            </div>
            
        </section>
    )
}