
import Logo from '../components/Logo';
import Button from '../components/Button';
import DownloadIcon from '../assets/download.svg';

const Footer = () => {
    return (
        <div className="bg-brand-600 text-white py-10 mt-10">
        <footer className="text-white flex items-center justify-between">
            <Logo invert={true}/>
            <div className="flex flex-col gap-3 items-center">
            <p> &copy; 2026 </p>
            <p className='font-semibold'> Developed using React </p>
            </div>
        </footer>
        </div>
    )
}

export default Footer;
