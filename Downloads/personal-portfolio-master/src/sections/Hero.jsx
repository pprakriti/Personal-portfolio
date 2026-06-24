
import SkillCard from '../components/SkillCard';
import VariableWeightText from '../components/VariableWeightText';

import Button from '../components/Button';
import DownloadIcon from '../assets/download.svg';
import Logo from '../assets/logo_1.svg';
import Banner from '../assets/Banner.svg';
import ResumeFile from '../assets/resume.pdf';
import PythonIcon from '../assets/python-svgrepo-com.svg';
import JavascriptIcon from '../assets/icon-javscript.svg';
import GitIcon from '../assets/icon-git.svg';
import CppIcon from '../assets/icons8-c++.svg';
import Android from '../assets/android-svgrepo-com.svg';
import ReactIcon from '../assets/react-svgrepo-com.svg';
import KotlinIcon from '../assets/kotlin-svgrepo-com.svg';
import LinuxIcon from '../assets/linux-svgrepo-com.svg';



const Hero = () => {
    return (
        <section id='hero' className='flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-between'>
            <div className='flex flex-col gap-5 items-center lg:items-start'>
                <p className='mt-10 text-2xl'>
                    Software Developer with over 10 years of experience in software development and research expertise in areas including realtime communication software, augmented reality (AR) software and applied AI to improve LLMs.
                </p>


                <div className='flex flex-row lg:flex-row gap-10 items-end lg:mt-auto justify-end lg:justify-start'>
                    <Button txt='Contact' href="#contact"/>
                    <Button txt='Resume' icon={DownloadIcon} href={ResumeFile} />
                </div>
            </div>
            <img src={Banner} className='w-full max-w-md ' />

        </section>
    )
};

export default Hero;
