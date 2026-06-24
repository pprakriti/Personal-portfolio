
import MainLogo from '../assets/logo_1.svg';
import PropTypes from 'prop-types';

/*
usable space = card size − padding − gaps − sibling elements (like the text)
card size = 186px
padding = p-6 = 24px top and bottom = 48px total
gaps = gap-8 = 32px between icon and text

usable space for icon only = 186px − 48px − 32px - 28 px (text-lg label, 1.75rem line height) = 78px usable height
*/
const SkillCard = ({icon, txt}) => {
    return (
        <div className={`max-w-[186px] max-h-[186px] rounded-lg customSmallShadow border-2 border-brand-600 bg-white aspect-square`}>
            <div className='rounded-lg hover:bg-brand-400 bg-white flex flex-col p-6 gap-8 items-center'>
                <img src={icon} className='w-[56px] h-[56px] object-contain'/>
                <p className='text-lg font-bold'> {txt} </p>
            </div>
        </div>
    )
}

export default SkillCard;


SkillCard.propTypes = {
    icon: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
};
