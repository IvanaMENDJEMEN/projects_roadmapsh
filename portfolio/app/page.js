'use client' 
import SectionProfil from '../components/Profil/SectionProfil'
import SectionAPropos from '../components/APropos/SectionAPropos'
import SectionSkills from '../components/Skills/SectionSkills'

export default function HomePage() {
  return (
    <div>
      <SectionProfil/>
      <SectionAPropos/>
      <SectionSkills/>
    </div>
  );
}
