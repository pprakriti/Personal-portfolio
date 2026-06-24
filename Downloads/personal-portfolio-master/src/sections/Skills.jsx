
import SkillCard from '../components/SkillCard';
import VariableWeightText from '../components/VariableWeightText';

import Logo from '../assets/logo_1.svg';
import PythonIcon from '../assets/python-svgrepo-com.svg';
import JavascriptIcon from '../assets/icon-javscript.svg';
import GitIcon from '../assets/icon-git.svg';
import CppIcon from '../assets/icons8-c++.svg';
import Android from '../assets/android-svgrepo-com.svg';
import ReactIcon from '../assets/react-svgrepo-com.svg';
import KotlinIcon from '../assets/kotlin-svgrepo-com.svg';
import LinuxIcon from '../assets/linux-svgrepo-com.svg';

const skillsData = [
    {title: 'Python', icon: PythonIcon},
    {title: 'Javascript', icon: JavascriptIcon},
    {title: 'Git', icon: GitIcon},
    {title: 'Linux', icon: LinuxIcon},
  
];

const Skills = () => {
    return (
        <section id="skills" className=" flex flex-col gap-5 items-center px-0 lg:px-8 md:px-4 ">
            <VariableWeightText regulartxt="My" boldtxt="Skills" className="text-brand-600"/>

                <div className='mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-2'>
                    {
                        skillsData.map((skill) => (
                            <SkillCard key={skill.title} txt={skill.title} icon={skill.icon}/>
                        ))
                    }
            </div>
        </section>
    )
};

export default Skills;
