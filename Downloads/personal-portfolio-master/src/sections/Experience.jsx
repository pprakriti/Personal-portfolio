

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

const experienceData = [
    {title: ' Quality Assurance Engineer', company: 'Interview Buddies.', dateRange: '06/2024 - 01/2025',
        desc: [
            'Worked on AI-assisted Mock Interview Platform, Interview Buddies',
            'Developed unit test in Python for the platform',
            'developed integration and dafeature test plan and testcases for AI resume review',
            'Studied feasibility for GPT APIs for Gemini and ChatGPT'

        ]
    },
    {title: 'Senior Quality Assurance Engineer', company: 'Inspeon Infosys and Technologies', dateRange: '04/2021 - 05/2024',
        desc: [
            'Design and Develop test plan and execute testcases to maintain quality of software deployed',
            'API testing using Postman',
            'Version control using Git/Github',
            'Bug tracking using Jira and practively escalate as needed',
            'Document bug findings',
            'Basic knowledge of Python'

        ]
    },
    {title: 'Quality Assurance Analyst', company: 'SoftMahal Technologies Pvt Ltd', dateRange: '04/2019 - 03/2021',
        desc: [
            'Worked as QA Engineer conducting bug triage, tracking with Jira',
            'Worked with release lead on resolving bugs',
            'Test scripts in Python',
            'API testing using Postman'

        ]
    },
   
];

const Experience = () => {
    return (
        <section id="experience" className=" rounded-lg customShadow flex flex-col gap-5 items-center px-0 lg:px-8 md:px-4 bg-brand-600 text-black">
            <VariableWeightText regulartxt="My" boldtxt="Experience"/>

                <div className=' flex flex-col gap-5'>
                    {
                        experienceData.map((exp) => (
                            <ExperienceCard key={exp.title} title={exp.title} comp={exp.company} dateRange={exp.dateRange} desc={exp.desc}/>
                        ))
                    }
            </div>
        </section>
    )
};

export default Experience;
