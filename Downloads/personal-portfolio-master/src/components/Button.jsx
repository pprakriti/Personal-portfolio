
import PropTypes from 'prop-types';

const Button = ({txt, icon, href, download}) => {

    const classes = 'rounded px-5 py-4 flex gap-2 items-center text-white bg-brand-600 hover:bg-brand-400';
    const inner = (<>{txt}
                {icon && <img src={icon} className='w-5 h-5'/>}
                 </>);

    const isAnchor = href?.startsWith('#');
    return (
        <div className="flex gap-3 items-center">
            {href ? (
                <a
                    href={href}
                    className={classes}
                    {...(download ? {download} : (!isAnchor ? {target: '_blank'} : {}))}
                >
                    {inner}
                </a>
            ) : (
                <button className={classes}>
                    {inner}
                </button>
            )}



        </div>
    )
}

export default Button;


Button.propTypes = {
    txt: PropTypes.string.isRequired,
}
