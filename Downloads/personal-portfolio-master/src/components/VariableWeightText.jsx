
import PropTypes from 'prop-types';


  const VariableWeightText = ({regulartxt, boldtxt, invert=false, className=''}) => {
      return (
          <h2 className={`space-x-4 text-5xl ${className} ${invert ? 'invert' : ''}`}>
              {regulartxt}
              <span className='ms-4 font-extrabold'>{boldtxt}</span>
          </h2>
      );
  };

export default VariableWeightText;


VariableWeightText.propTypes = {
    regulartxt: PropTypes.string.isRequired,
    boldtxt: PropTypes.string.isRequired,
    invert: PropTypes.bool,
    className: PropTypes.string,
};
