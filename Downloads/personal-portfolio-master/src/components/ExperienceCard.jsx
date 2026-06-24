
import MainLogo from '../assets/logo_1.svg';
import PropTypes from 'prop-types';

/*
usable space = card size − padding − gaps − sibling elements (like the text)
card size = 186px
padding = p-6 = 24px top and bottom = 48px total
gaps = gap-8 = 32px between icon and text

usable space for icon only = 186px − 48px − 32px - 28 px (text-lg label, 1.75rem line height) = 78px usable height
*/
const ExperienceCard = ({title, comp, dateRange, desc}) => {
    return (
        // Base start color: border border-sky-400 transition-colors
        // on hover: hover:border-sky-300
        <div className=' transition duration-100 ease-in-out hover:scale-110 w-full p-6 rounded-lg bg-brand-500 border border-brand-400
                        transition-colors hover:bg-brand-200 text-black'>
        {/* // Title, company and dateRange */}
        <div className='flex justify-between items-end'>
            <p className='text-lg font-bold'> {title} <span className='font-normal'> at </span> {comp} </p>
            <p className='text-sm'> {dateRange} </p>
        </div>
        {/* // Description */}
        <div className='text-sm'>
            <ul className='list-disc list-inside space-y-1'>
                {
                    desc.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                    }
            </ul>
        </div>

        </div>
    )
}

export default ExperienceCard;


ExperienceCard.propTypes = {
    title: PropTypes.string.isRequired,
    comp: PropTypes.string.isRequired,
    dateRange: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
};
