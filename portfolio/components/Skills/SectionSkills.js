import '../Skills/SectionSkills.css'
import CardSkill from '../CardSkill/CardSkill'

export default function SectionSkills(){
    return (
        <section className='section-skill cadre'>
            <div className='section-skill-title'> 
                <h1> Mes Compétences </h1>
            </div>
            <div className='section-skill-card'>
                <CardSkill image='/logo-js.png' alt='Logo-js' label='JavaScript' description='' />
                <CardSkill image='/logo-html.png' alt='Logo-html' label='HTML' description='' />
                <CardSkill image='/logo-css (1).png' alt='Logo-css' label='CSS' description='' />
                <CardSkill image='/logo-git.png' alt='Logo-git' label='Git' description='' />
                <CardSkill image='/logo-linux.png' alt='Logo-linux' label='Linux' description='' />
                <CardSkill image='/logo-bash.png' alt='Logo-bash' label='Shell Bash' description='' />
                <CardSkill image='/react-logo.png' alt='Logo-react' label='React JS' description='' />
                <CardSkill image='/logo-next.png' alt='Logo-next' label='Next JS' description='' />
            </div>
            
        </section>
    )
}