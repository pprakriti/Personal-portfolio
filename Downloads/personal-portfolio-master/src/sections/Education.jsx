

import ExperienceCard from '../components/ExperienceCard';
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

const educationData = [
    {title: 'Bachelor of Engineering', company: 'Pokhare University, Nepal', dateRange: '09/2014 - 03/2019',
        desc: [
            'Information Technology Engineering',
            'Courses: Object Oriented Programming in C++,Data Structures, Algorithms, Database Management, Software Engineering.'

        ]
    },
    
];

const Education = () => {
    return (
        <section id="education" className=" mt-20 rounded-lg customShadow flex flex-col gap-5 items-center px-0 lg:px-8 md:px-4 bg-brand-600 text-black">
            <VariableWeightText boldtxt="Education"/>

                <div className=' flex flex-col gap-5'>
                    {
                        educationData.map((exp) => (
                            <ExperienceCard key={exp.title} title={exp.title} comp={exp.company} dateRange={exp.dateRange} desc={exp.desc}/>
                        ))
                    }
            </div>
        </section>
    )
};

export default Education;
