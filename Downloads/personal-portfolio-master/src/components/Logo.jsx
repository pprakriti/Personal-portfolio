import {Link} from 'react-router-dom';
import MainLogo from '../assets/logo_1.svg';
import PropTypes from 'prop-types';

const Logo = ({invert=false}) => {
    return (
        <a href="#hero">
        <div className={`flex gap-3 items-center`}>
            <img src={MainLogo} className={`w-10 h-10 ${invert ? 'brightness-0 invert' : ''}`} />
            <h2 className={`text-xl font-bold ${invert ? 'text-white' : 'text-brand-600'}`}> Rajesh Dawadi </h2>

        </div>
        </a>
    )
}

export default Logo;


Logo.propTypes = {
    invert: PropTypes.bool,
};
