
import Logo from '../components/Logo';
import Button from '../components/Button';
import DownloadIcon from '../assets/download.svg';
import ResumeFile from '../assets/resume.pdf';   // import → Vite resolves the URL

const Header = () => {
    return (
        // sticky top-0 z-50 pins it; bg-white keeps content from showing through; border-b border-gray-200 is the bottom ruler.
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200">   {/* full-width bar → ruler reaches both edges */}
            <header className="flex items-center justify-between">                 {/* still gets container mx-auto + padding from index.css */}
            <Logo />
                <nav className="flex gap-8 font-bold text-brand-600">
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
                </nav>
            <Button txt='Resume' icon={DownloadIcon} href={ResumeFile} />
            </header>
        </div>
    )
}

export default Header;
