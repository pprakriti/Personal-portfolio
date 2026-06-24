
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
import MailIcon from '../assets/mail.svg';


const Contact = () => {
    return (
        // py-2 ! inverts global padding
        <section id="contact" className="p-5! flex flex-col lg:flex-row gap-8 items-stretch justify-between mt-20 rounded-lg customSmallShadow border-2 border-blue-500">

            {/* // left side of the contact section */}
            <div className='flex flex-col gap-5 justify-center lg:items-start'>
                <p className='mt-10 text-2xl font-bold text-brand-600'>Get in touch</p>
                <p className='text-lg text-brand-600'>I am located in San Francisco, Bay Area and always open to discussing new projects and creative ideas. </p>
                <a href="mailto:rajesh.dawadi@gmail.com" aria-label="Email me"
                    className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-400 transition">
                    <img src={MailIcon} className="w-7 h-7" />
                </a>
            </div>

            {/* // right side of the contact section  = Map */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d33596.17855826307!2d-122.47898112728603!3d37.796570753988135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20san%20francisco!5e0!3m2!1sen!2sus!4v1781670044369!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  */}

            <iframe
                src="https://www.google.com/maps?q=San Francisco, Bay Area&output=embed"
                className="w-full lg:w-2/3 self-stretch min-h-[400px] rounded-lg border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
            />
        </section>
    )
};

export default Contact;
